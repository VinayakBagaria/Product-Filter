import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, ProductContainer, Paginator } from './../containers';
import ProductDescription from './../ProductDescription';
import { fetchData, brandFilter } from './../../actions';
import './../styles/Container.css';

class Container extends Component {
  componentDidMount() {
    this.dispatchAction();
  }

  makeUrl = (brand = this.props.brand) => {
    const { minPrice, highPrice, colors } = this.props;
    return `&pricelow=${minPrice}&pricehigh=${highPrice}&colors=${colors}&brand=${brand}`;
  };

  dispatchAction() {
    const { dispatch, pageNumber } = this.props;
    dispatch(fetchData(this.makeUrl(), pageNumber));
  }

  render() {
    const {
      isFetching,
      totalPages,
      products,
      dispatch,
      pageNumber,
    } = this.props;
    return (
      <Fragment>
        <Form
          onChange={e => {
            const { value } = e.target;
            dispatch(brandFilter(value, this.makeUrl(value), pageNumber));
          }}
          onSubmit={e => {
            e.preventDefault();
            this.dispatchAction();
          }}
        />
        <ProductContainer isFetching={isFetching} products={products} />
        <Paginator
          totalPages={totalPages}
          onPageChange={data =>
            dispatch(fetchData(this.makeUrl(), data.selected + 1))
          }
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { filters, result } = state;
  return {
    ...filters,
    ...result,
  };
}

Container.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(ProductDescription).isRequired,
  minPrice: PropTypes.number.isRequired,
  highPrice: PropTypes.number.isRequired,
  colors: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

Container.defaultProps = {
  isFetching: false,
  totalPages: 0,
};

export default connect(mapStateToProps)(Container);
