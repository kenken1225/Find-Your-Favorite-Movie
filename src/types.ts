// 映画の型定義（TMDB API から取得するデータ）
export type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
  release_date: string;
  original_language: string;
};

// トレンド映画の型定義（Appwrite から取得するデータ）
export type TrendingMovie = {
  $id: string;
  title: string;
  poster_url: string;
  count: number;
};
