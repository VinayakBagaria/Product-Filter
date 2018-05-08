import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import Button from './Button';
import { fetchData, changePage } from './../../actions';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData(this.props.page));
  }
  render() {
    const {
      count, products, dispatch, page,
    } = this.props;
    const totalPages = count / products.length;
    const buttons = [];
    for (let i = 1; i < totalPages; i += 1) {
      buttons.push(<Button
        key={i}
        text={i}
        onClick={() => {
            dispatch(changePage(i));
            dispatch(fetchData(page));
          }}
      />);
    }
    return (
      <Fragment>
        {products.map(product => (
          <Product key={product.pk} product={product} />
        ))}
        {buttons}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { page, products, count } = state.result;
  return {
    page,
    products,
    count,
  };
}

ProductsContainer.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    pk: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProductsContainer);
