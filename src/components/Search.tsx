type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const Search = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <>
      <div className="search">
        <img src="./search.svg" alt="Search" />
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </>
  );
};

export default Search;
