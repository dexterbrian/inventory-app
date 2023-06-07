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
    <div>ProductListing</div>
  )
}

export default ProductListing;