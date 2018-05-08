import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import Button from './Button';
import { fetchData, changePage } from './../../actions';

class Container extends Component {
  state = {
    url: '',
  };
  componentDidMount() {
    const {
      minPrice,
      highPrice,
      colors,
      brand,
      dispatch,
      pageNumber,
    } = this.props;
    this.setState({
      url: `&pricelow=${minPrice}&pricehigh=${highPrice}&colors=${colors}&brand=${brand}`,
    });
    dispatch(fetchData(this.state.url, pageNumber));
  }
  render() {
    const {
      isFetching, pageNumber, count, products, dispatch,
    } = this.props;
    const totalPages = count / products.length;
    const buttons = [];
    for (let i = 1; i <= totalPages; i += 1) {
      buttons.push(<Button
        key={i}
        text={i}
        disabled={pageNumber === i}
        onClick={e => {
            e.preventDefault();
            dispatch(changePage(this.state.url, i));
          }}
      />);
    }
    return (
      <Fragment>
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Empty.</h2>}
        {products.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            {products.map(product => (
              <Product key={product.pk} product={product} />
            ))}
          </div>
        )}
        {buttons}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const {
    isFetching, products, count, pageNumber,
  } = state.result;
  const {
    minPrice, highPrice, colors, brand,
  } = state.filters;
  return {
    isFetching,
    pageNumber,
    products,
    count,
    minPrice,
    highPrice,
    colors,
    brand,
  };
}

Container.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    pk: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  minPrice: PropTypes.number.isRequired,
  highPrice: PropTypes.number.isRequired,
  colors: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Container.defaultProps = {
  isFetching: false,
};

export default connect(mapStateToProps)(Container);
