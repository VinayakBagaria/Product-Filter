import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const styles = { textAlign: 'center' };

const ProductContainer = ({ isFetching, products }) => (
  <React.Fragment>
    {isFetching && products.length === 0 && <h2 style={styles}>Loading...</h2>}
    {!isFetching && products.length === 0 && <h2 style={styles}>Empty.</h2>}
    {products.length > 0 && (
      <div
        style={{ opacity: isFetching ? 0.5 : 1 }}
        className="product-container"
      >
        {products.map(product => (
          <Product key={product.pk} product={product} />
        ))}
      </div>
    )}
  </React.Fragment>
);

ProductContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      pk: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      discount: PropTypes.number,
      brand: PropTypes.string,
      color: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default ProductContainer;
