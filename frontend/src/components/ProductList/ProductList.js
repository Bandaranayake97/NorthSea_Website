
import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';


function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          
          <img src={product.photo} alt={product.name} />
          
          <div className='product-details'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
