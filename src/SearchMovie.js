import React, { useState } from "react";

function SearchMovie({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchMovie;
