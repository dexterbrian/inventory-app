import React, { useState } from 'react';

const Sorting = ({ onSort }) => {
  const [sortCriteria, setSortCriteria] = useState('name'); // Default sorting criteria is 'name'

  const handleSortChange = (event) => {
    const selectedSortCriteria = event.target.value;
    setSortCriteria(selectedSortCriteria);
    onSort(selectedSortCriteria);
  };

  return (
    <div>
      <label>
        Sort By:
        <select value={sortCriteria} onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </label>
    </div>
  );
};

export default Sorting;
