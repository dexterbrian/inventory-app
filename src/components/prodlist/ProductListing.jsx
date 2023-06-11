import React from "react";
import "./ProductListing.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import SearchBox from "../SearchBox";
import Product from "./Product";

// step1: declare state variables
function ProductListing({ products, searchProduct, searchResults }) {

  const history = useHistory();

  function onAddProductClick() {
    history.push('/add');
  }

  function onProductClick(product) {
    history.push('/edit', product);
  }

  return (
    <div className="background-container">
      <div className="product-container">
        <nav className="listings-header">
          <h2 className="product-title">All Products</h2>
          <SearchBox onSearch={ searchProduct } />
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
              products.map(
                (product) => (
                  <Product key={ product.id } product={ product } onProductClick={ onProductClick } />
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductListing;
