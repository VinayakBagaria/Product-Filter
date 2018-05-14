import React, { Fragment } from 'react';
import type { ProductDescription } from './../ProductDescription';
import Product from './Product';

const styles: Object = { textAlign: 'center' };

type Props = {
  isFetching: boolean,
  products: Array<ProductDescription>,
};

const ProductContainer = ({ isFetching, products }: Props) => (
  <Fragment>
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
  </Fragment>
);

export default ProductContainer;
