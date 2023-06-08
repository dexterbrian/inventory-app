import React, { useState } from 'react'
import "./AddProduct.css";

function AddProductForm(addProduct) {
    // step1: define state variables
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [category, setCategory] = useState("");
    let [quantity, setQuantity] = useState("");

    // step2: handleSubmit function
    const handleFormSubmit = async (event) => {
      event.preventDefault();

    // step3: new product object
    const newProduct = {
      name: name,
      description: description,
      category: category,
      quantity: quantity,
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
      .then((data) => {
        // success adding product, yaay! :)
        console.log("Product added:", data);
        setName("");
        setDescription("");
        setCategory("");
        setQuantity("");
      })
      
  };

  return (
    <div>AddProduct</div>
  )
}

export default AddProductForm;