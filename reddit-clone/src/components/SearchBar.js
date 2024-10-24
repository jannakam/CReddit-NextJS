"use client";

export default function SearchBar() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    window.location.href = `/?search=${query}`; // Redirect to homepage with search query in URL
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" name="search" placeholder="Search by title" />
      <button type="submit">Search</button>
    </form>
  );
}
