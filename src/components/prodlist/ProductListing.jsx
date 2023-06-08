import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import AddProductForm from "../addprods/AddProductForm";

// step1: declare state variables
function ProductListing() {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  useEffect(() => {
    // step2: fetch products
     fetch("http://localhost:3000/products")
     .then((response) => response.json())
     .then((data) => setProducts(data));
  }, []);


  //  a-prod2: function to add new product
  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddForm(false);
  };

  return (
    <div className="background-container">
        <div className="product-container">

          <nav className="listings-header">
            <h2 className="product-title">Home Products</h2>
            <button
            className="add-product-button"
            onClick={() => setShowAddForm(!showAddForm)}
            >
            {showAddForm ? "Cancel" : "+ New Product"}
          </button>
          {/*a-prod3: for AddProductForm visibility*/}
          </nav>
          {showAddForm && (
          <div className="add-product-form-container">
            {/* a-prod4: when showAddForm is true, render AddProductForm*/}
            <AddProductForm onProductAdded={handleProductAdded} />
          </div>
          )}

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
              {/* step3: Map over the products array and display product details */}
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
