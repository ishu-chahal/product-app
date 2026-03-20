import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
  type="text"
  placeholder="Search product..."
  onChange={(e) => setSearch(e.target.value)}
  style={{
    padding: "10px",
    width: "100%",
    maxWidth: "300px"
  }}
/>
  );
}

export default SearchBar;