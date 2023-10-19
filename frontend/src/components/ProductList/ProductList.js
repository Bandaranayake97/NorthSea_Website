
//import React from 'react'
import React, { useState } from 'react';
import './ProductList.css'
//import { Link } from 'react-router-dom';


function ProductList({ products }) {

  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleAccordion = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (



    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          
          <img src={product.photo} alt={product.name} />
          
          <div className='product-details'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={() => toggleAccordion(product.id)}>
                  {expandedProduct === product.id ? "Hide Details" : "View Details"}
                </button>
                  {expandedProduct === product.id && (
                    <div className="product-details-expanded">
                      {product.expandedDetails}
                    </div>
                  )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
