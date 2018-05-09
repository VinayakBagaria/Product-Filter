import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';
import ProductContainer from './ProductContainer';
import Paginator from './Paginator';
import ProductDescription from './ProductDescription';
import { fetchData, changePage, brandFilter } from './../../actions';
import './../styles/Container.css';

class Container extends Component {
  state = {
    url: '',
    value: '',
  };

  componentDidMount() {
    this.dispatchAction();
  }

  makeUrl = (brand = this.props.brand) => {
    const { minPrice, highPrice, colors } = this.props;
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
      isFetching, count, products, dispatch, pageNumber,
    } = this.props;
    const totalPages = count / products.length;
    return (
      <Fragment>
        <Form
          value={this.state.value}
          onChange={e => {
            const { value } = e.target;
            this.setState({ value });
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
            dispatch(changePage(this.state.url, data.selected + 1))
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
