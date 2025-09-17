import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Recommend</button>
    </form>
  );
}

export default SearchBar;
