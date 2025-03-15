import React from 'react';
import './Breadcrum.css';

const Breadcrum = ({ product }) => {
  if (!product) {
    return null; // Prevents error if product is undefined
  }

  return (
    <div className="breadcrum">
      <p>Home / {product.category} / {product.name}</p>
    </div>
  );
};

export default Breadcrum;
