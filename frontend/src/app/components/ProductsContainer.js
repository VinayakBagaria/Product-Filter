import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './Product';
import { fetchData } from '../../actions/index';

class ProductsContainer extends Component {
  state = {
    pageNumber: 1,
  };
  componentDidMount() {
    this.props.dispatch(fetchData(this.state.pageNumber));
  }

  render() {
    return (
      <Fragment>
        {this.props.products.map(product => (
          <Product key={product.pk} product={product} />
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

ProductsContainer.propTypes = {
  products: PropTypes.array(PropTypes.shape({
    pk: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.array(PropTypes.string),
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProductsContainer);
