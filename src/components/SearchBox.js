import React from 'react';
import "./SearchBox.css";

const InventorySearchBox = ({ onSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search a product name..."
        onChange={ (e) => onSearch(e.target.value) }
      />
    </div>
  );
};

export default InventorySearchBox;
