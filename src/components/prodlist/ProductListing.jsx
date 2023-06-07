import React, { useEffect, useState } from "react";
import "./ProductListing.css";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
     fetch("http://localhost:3000/products")
     .then((response) => response.json())
     .then((data) => setProducts(data));
 }, []);

  return (
    <div className="background-container">
        <div className="product-container">
          <nav className="navbar">
            <h2 className="product-title">Home Products</h2>
            <button className="add-product-button">+ New Product</button>
          </nav>
          <table className="product-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default ProductListing;