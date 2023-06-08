import React from "react";

function SearchBox({ search }) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        onChange={ (e) => search(e.target.value) }
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default SearchBox;
