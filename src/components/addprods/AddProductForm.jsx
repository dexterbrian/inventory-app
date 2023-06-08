import React, { useState } from "react";
import "./AddProductForm.css";
import { baseUrl } from "../baseUrl";
import { useLocation } from 'react-router-dom';

function AddProductForm({ isLoggedIn, products, setProducts }) {
  
  const location = useLocation();
  const data = location.state;
  const [ name, setName ] = useState(data?.name !== "" ? data?.name : "");
  const [ description, setDescription ] = useState(data?.description !== "" ? data?.description : "");
  const [ category, setCategory ] = useState(data?.category !== "" ? data?.category : "");
  const [ quantity, setQuantity ] = useState(data?.quantity !== "" ? data?.quantity : "");
  

  function updateProduct() {
    fetch(`${baseUrl}/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        category: category,
        quantity: quantity,
      }),
    })
    .then((response) => response.json())
    .then((json) => {
      // successful in adding product
      setProducts([...products, json]);
      setName(json.name);
      setDescription(json.description);
      setCategory(json.category);
      setQuantity(json.quantity);
    })
    .catch((error) => {
      // console.log an error if it occurs when trying to add new product
      console.error("Error adding product:", error);
      alert("Error adding product:", error);
    });
  }

  function addProduct() {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        category: category,
        quantity: quantity,
      }),
    })
    .then((response) => response.json())
    .then((json) => {
      // successful in adding product
      setProducts([...products, json]);
      setName("");
      setDescription("");
      setCategory("");
      setQuantity("");
    })
    .catch((error) => {
      // console.log an error if it occurs when trying to add new product
      console.error("Error adding product:", error);
      alert("Error adding product:", error);
    });
  }

  // step2: handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    // step4: POST request to add new Product to backend
    data ? updateProduct() : addProduct()
  };

  // step5: render the product
  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={ name }
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <textarea
            id="description"
            value={ description }
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Product Description"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="category"
            value={ category }
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="Product Category"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="quantity"
            value={ quantity }
            onChange={(e) => setQuantity(e.target.value)}
            required
            placeholder="Product Quantity"
          />
        </div>
        <button type="submit" className="add-product-button">
          { data ? "Edit Product" : "Add Product" }
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
