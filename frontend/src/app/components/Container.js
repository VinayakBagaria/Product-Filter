import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Form from './Form';
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
        {isFetching && products.length === 0 && <h2>Loading...</h2>}
        {!isFetching && products.length === 0 && <h2>Empty.</h2>}
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
        <div id="react-paginate">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel={<a href="/">...</a>}
            breakClassName="break-me"
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={data =>
              dispatch(changePage(this.state.url, data.selected + 1))
            }
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </div>
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
