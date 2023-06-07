import React, { useState } from 'react';
import './Modify.css'

const Modify = () => {
    // useState to load form input values before form submission
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [location, setLocation] = useState('');
  const [unitType, setUnitType] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div id="modifyProductForm">
        <header>
            <h3>Modify Product</h3>
            <h4>Edit or Delete a Product</h4>
        </header>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="productId">System Product ID:</label>
        <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Unique ID for product"
            required
        />

        <br />

        <label htmlFor="productName">Product Name:</label>
        <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Description for product"
            required
        />

        <br />

        <label htmlFor="productType">Product Type:</label>
        <select
            id="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            required
        >
            <option value="" disabled>Select product type</option>
            <option value="Convenience/General">Convenience/General</option>
            <option value="Commodity/Shopping">Commodity/Shopping</option>
            <option value="Custom/Specialty">Custom/Specialty</option>
            <option value="Raw Materials">Raw Materials</option>
            <option value="Others/Unsought">Others/Unsought</option>
        </select>

        <br />

        <label htmlFor="productDescription">Product Description:</label>
        <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter product description"
        ></textarea>

        <br />

        <label htmlFor="supplier">Supplier/Vendor:</label>
        <input
            type="text"
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Enter Supplier/Vendor Name"
            required
        />

        <br />

        <label htmlFor="location">Store/Stock Location:</label>
        <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Store/Stock Location"
            required
        />

        <br />

        <label htmlFor="unitType">Unit standard/type:</label>
        <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            required
        >
            <option value="" disabled>Select unit standard/type</option>
            <option value="Package">Package</option>
            <option value="Kilogram">Kilogram</option>
        </select>

        <br />

        <label htmlFor="stockQuantity">Stock Quantity:</label>
        <input
            type="number"
            id="stockQuantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
            placeholder="Number of products to be added"
            required
        />

        <br />

        <label htmlFor="unitPrice">Unit Price:</label>
        <input
            type="number"
            id="unitPrice"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
        />

        <br />

        <button type="submit">Submit Changes</button>
        <button type="button">Delete Product</button>
        <button type="button">Cancel Changes</button>
        </form>
    </div>
  );
};

export default Modify;
