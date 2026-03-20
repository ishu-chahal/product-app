import React from "react";

function Filter({ setCategory }) {
  return (
    <select
  onChange={(e) => setCategory(e.target.value)}
  style={{
    padding: "10px",
    width: "100%",
    maxWidth: "200px"
  }}
>
      <option value="">All</option>
      <option value="men's clothing">Men</option>
      <option value="women's clothing">Women</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewellery</option>
    </select>
  );
}

export default Filter;