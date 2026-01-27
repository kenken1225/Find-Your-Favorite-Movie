import { Client, Databases, Query, ID } from "appwrite";
import { Movie } from "./types";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATEBASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
const database = new Databases(client);

type SearchProps = {
  searchTerm: string;
  movie: Movie;
};

export const updateSearchCount = async ({ searchTerm, movie }: SearchProps) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal("SearchTerm", searchTerm)]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        SearchTerm: searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error) {
    Error.captureStackTrace(error as Error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.orderDesc("count"), Query.limit(5)]);
    return result.documents;
  } catch (error) {
    Error.captureStackTrace(error as Error);
    throw error;
  }
};
