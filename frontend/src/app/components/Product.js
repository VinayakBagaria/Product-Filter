import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
  <div className="single-product">
    <h1>{product.name}</h1>
    <span>{product.brand}</span>
    <p>
      {product.price} -- {product.discount}
    </p>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    pk: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Product;
