import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, ProductContainer, Paginator } from './../components';
import type { ProductDescription } from './../ProductDescription';
import { fetchData, brandFilter } from './../../actions';
import './../styles/Container.css';

type Result = {
  totalPages: number,
  isFetching: boolean,
  products: Array<ProductDescription>,
  pageNumber: number,
};

type Filters = {
  minPrice: number,
  highPrice: number,
  colors: string,
  brand: string,
};

type Props = Result &
  Filters & {
    dispatch: Function,
  };

class Container extends Component<Props> {
  static defaultProps = {
    isFetching: false,
    totalPages: 0,
  };

  componentDidMount() {
    this.dispatchAction();
  }

  makeUrl = (brand: string = this.props.brand) => {
    const {
      minPrice,
      highPrice,
      colors,
    }: { minPrice: number, highPrice: number, colors: string } = this.props;
    return `&pricelow=${minPrice}&pricehigh=${highPrice}&colors=${colors}&brand=${brand}`;
  };

  dispatchAction() {
    const {
      dispatch,
      pageNumber,
    }: { dispatch: Function, pageNumber: number } = this.props;
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
            const { value }: { value: string } = e.target;
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
  const { filters, result }: { filters: Filters, result: Result } = state;
  return {
    ...filters,
    ...result,
  };
}

export default connect(mapStateToProps)(Container);
