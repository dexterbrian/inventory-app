import React, { useState } from 'react'
import "./AddProduct.css";

function AddProductForm() {
    // step1: define state variables
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [category, setCategory] = useState("");
    let [quantity, setQuantity] = useState("");

    // step2: handleSubmit function
    const handleSubmit = (event) => {
      event.preventDefault();

    // step3: new product object
    const newProduct = {
      name,
      description,
      category,
      quantity,
    };

    // step4: POST request to add new Product to backend
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => 
      {
        // success adding product
        console.log("Product has been added", data);
        setName("");
        setDescription("");
        setCategory("");
        setQuantity("");
      })

      .catch((error) => {
        // console.log an error if it occurs when trying to add new product :(
        console.error("Error adding product!", error);
      });

    // step5: render the product
    return (
      <div className="add-product-container">
        <form className="add-product-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-product-button">
          Add Product
        </button>

        </form>
      </div>
    )
      
  };
}

export default AddProductForm;