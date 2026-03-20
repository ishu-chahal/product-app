import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h2>Products</h2>

<div style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "20px"
}}>
  <SearchBar setSearch={setSearch} />
  <Filter setCategory={setCategory} />
</div>
      <div style={{
  
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px"
  }}>
  
      {products
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((item) =>
    category === "" ? true : item.category === category
  )
  .map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
</div>
    </div>
  );
}

export default ProductList;