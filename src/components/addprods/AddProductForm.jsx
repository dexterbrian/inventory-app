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
  const [ showDeleteButton, setShowDeleteButton ] = useState(data); // set initial value based on data

  function updateProduct() {
    fetch(`${baseUrl}/${data.id}`, {
      method: "PATCH",
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
      // successful in updating product
      setProducts([...products, json]);
      setName(json.name);
      setDescription(json.description);
      setCategory(json.category);
      setQuantity(json.quantity);
      // Show success alert
      alert("Product updated successfully!");
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
      // Show success alert
      alert("Product added successfully!");
    })
    .catch((error) => {
      // console.log an error if it occurs when trying to add new product
      console.error("Error adding product:", error);
      alert("Error adding product:", error);
    });
  }

  function deleteProduct() {
    // The deleteProduct function is created here to combine functionality of Add and Update Product
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      fetch(`${baseUrl}/${data.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // Remove the product from the products array
            const updatedProducts = products.filter(
              (product) => product.id !== data.id
            );
            setProducts(updatedProducts);
            // Reset the form fields
            setName("");
            setDescription("");
            setCategory("");
            setQuantity("");
            // Hide the delete button
            setShowDeleteButton(false);
          } else {
            console.error("Failed to delete product:");
            throw new Error("Failed to delete product");
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          alert("Error deleting product:", error);
        });
    }
  }

  // step2: handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    // step4: POST request to add new Product to backend
    if (data) {
      // showing the delete button when there is data in addition to updating an existing product
      setShowDeleteButton(true)
      updateProduct()
    } else {
      addProduct()
    }
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
        {showDeleteButton && (
        <button type="button" className="add-product-button" onClick={deleteProduct}>
            Delete Product
        </button>
        )}
      </form>
    </div>
  );
}

export default AddProductForm;
