import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';
import ProductContainer from './ProductContainer';
import Paginator from './Paginator';
import ProductDescription from './ProductDescription';
import { fetchData, changePage, brandFilter } from './../../actions';
import './Container.css';

class Container extends Component {
  state = {
    url: '',
    value: '',
  };

  componentDidMount() {
    this.dispatchAction();
  }

  makeUrl = () => {
    const {
      minPrice, highPrice, colors, brand,
    } = this.props;
    return `&pricelow=${minPrice}&pricehigh=${highPrice}&colors=${colors}&brand=${brand}`;
  };

  dispatchAction() {
    const newFilter = this.makeUrl();
    this.setState({
      url: newFilter,
    });
    const { dispatch, pageNumber } = this.props;
    dispatch(fetchData(newFilter, pageNumber));
  }

  render() {
    const {
      isFetching, count, products, dispatch,
    } = this.props;
    const totalPages = count / products.length;
    return (
      <Fragment>
        <Form
          value={this.state.value}
          onChange={e => {
            const { value } = e.target;
            this.setState({ value });
            this.props.dispatch(brandFilter(value));
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
            dispatch(changePage(this.state.url, data.selected + 1))
          }
        />
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
  products: PropTypes.arrayOf(ProductDescription).isRequired,
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
