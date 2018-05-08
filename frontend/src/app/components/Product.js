import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({
  product: {
    name, brand, price, discount, rating,
  },
}) => {
  const stars = [];
  for (let i = 1; i <= rating; i += 1) {
    stars.push(<li key={i}>
      <span className="fa fa-star" />
    </li>);
  }
  for (let i = rating + 1; i <= 5; i += 1) {
    stars.push(<li key={i}>
      <span className="fa fa-star-o" />
    </li>);
  }

  return (
    <div className="cat-item">
      <div className="item-header">
        <img src="http://placehold.it/242x242" alt="" />
      </div>
      <div className="item-body">
        <h4 className="item-title">{name}</h4>
        <div className="item-size">{brand}</div>
        <div className="item-rating rating">
          <ul className="item-stars rating-stars">{stars}</ul>
          <span className="item-rating-no rating-no small">300</span>
        </div>
        <div className="item-price h4">
          <strike style={{ opacity: 0.8 }}>Rs. {price}</strike> Rs.{' '}
          {price * (1 - discount / 100)}
        </div>
      </div>
    </div>
  );
};

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
