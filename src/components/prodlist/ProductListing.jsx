import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { baseUrl } from "../baseUrl";
import SearchBox from "../SearchBox";

// step1: declare state variables
function ProductListing({ products, setProducts }) {

  const [ searchResults, setSearchResults ] = useState([]);
  const history = useHistory();

  function searchProduct(searchTerm) {
    const results = searchTerm === '' ? products : products.filter(product => product.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }

  function onAddProductClick() {
    history.push('/add');
  }

  function onProductClick(product) {
    history.push('/edit', product);
  }

  useEffect(() => {
    // step2: fetch products
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="background-container">
      <div className="product-container">
        <nav className="listings-header">
          <h2 className="product-title">All Products</h2>
          {/* <SearchBox search={ searchProduct }/> */}
          <button
            className="add-product-button"
            onClick={() => onAddProductClick() }
          >+ New Product</button>
        </nav>
        <table className="product-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>CATEGORY</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {
              // searchResults === 0 ? 
                products.map(
                  (product) => (
                    <tr key={product.id} onClick={ e => onProductClick(product) }>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  )
                )
              // : searchResults.map(
              //   (product) => (
              //     <tr key={product.id} onClick={ e => onProductClick(product) }>
              //       <td>{product.name}</td>
              //       <td>{product.description}</td>
              //       <td>{product.category}</td>
              //       <td>{product.quantity}</td>
              //     </tr>
              //   )
              // )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductListing;
