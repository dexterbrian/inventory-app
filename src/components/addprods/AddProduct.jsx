import React, { useState } from 'react'
import "./AddProduct.css";

function AddProduct() {
    // step1: define state variables
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct