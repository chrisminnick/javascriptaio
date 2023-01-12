function SearchForm() {
  return (
    <form>
      <label htmlFor="searchterm">
        Search For:
        <input type="text" id="searchTerm" />
      </label>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
