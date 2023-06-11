import React from 'react';

const InventorySearchBox = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a product name..."
        onChange={ (e) => onSearch(e.target.value) }
      />
      </div>
  );
};

export default InventorySearchBox;
