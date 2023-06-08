import React, { useState } from 'react'
import "./AddProduct.css";

function AddProductForm(addProduct) {
    // define state variables
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    // handleSubmit function
    const handleFormSubmit = async (event) => {
      event.preventDefault();

    // new product object
    const newProduct = {
      name: name,
      description: description,
      category: category,
      quantity: quantity,
    };



    }

  return (
    <div>AddProduct</div>
  )
}

export default AddProductForm;