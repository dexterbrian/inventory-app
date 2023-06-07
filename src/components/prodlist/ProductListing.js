import React, { useEffect, useState } from "react";

function ProductListing() {
    const [setProducts] = useState([]);
  
    useEffect(() => {
  
      // step1: to fetch products
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    });



return (
    <div>ProductListing
      <table>
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
    
  )
}

export default ProductListing;