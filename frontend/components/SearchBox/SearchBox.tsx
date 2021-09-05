const SearchBox = () => {
  return (
    <div className="mr-2 md:inline-block hidden">
      <div className="relative w-full md:w-64">
        <input
          type="search"
          className="appearance-none border rounded py-2 px-3 leading-tight w-full focus:outline-none focus:ring"
          placeholder="Search"
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default SearchBox;
