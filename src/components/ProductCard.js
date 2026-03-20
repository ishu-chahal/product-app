import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();
  return (
    <div
  onClick={() => navigate(`/product/${product.id}`)}
  style={{
    border: "1px solid #ddd",
    padding: "10px",
    width: "100%",
    maxWidth: "200px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer"
  }}>
      <img 
  src={product.image} 
  alt=""
  style={{
    width: "100%",
    height: "120px",
    objectFit: "contain"
  }}
/>
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;