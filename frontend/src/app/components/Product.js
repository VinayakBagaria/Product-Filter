import React from 'react';
import type { ProductDescription } from './../ProductDescription';
import './../styles/Product.css';

type Props = {
  product: ProductDescription,
};

const Product = ({
  product: { name, brand, price, discount, rating, color },
}: Props) => {
  const stars: Array<any> = [];
  for (let i: number = 1; i <= rating; i += 1) {
    stars.push(
      <li key={i}>
        <span className="fa fa-star" />
      </li>
    );
  }
  if (rating !== Math.ceil(rating)) {
    stars.push(
      <li key={Math.random()}>
        <span className="fa fa-star-half-o" />
      </li>
    );
  }
  for (let i: number = rating + 1; i <= 5; i += 1) {
    stars.push(
      <li key={i}>
        <span className="fa fa-star-o" />
      </li>
    );
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
        </div>
        <div className="item-price h4">
          <strike style={{ opacity: 0.8 }}>Rs. {price}</strike> Rs.{' '}
          {price * (1 - discount / 100)}
        </div>
        <div className="colors">
          {color.map(c => <span key={c} style={{ background: c }} />)}
        </div>
      </div>
    </div>
  );
};

export default Product;
