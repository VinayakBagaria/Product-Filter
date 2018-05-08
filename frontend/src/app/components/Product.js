import React from 'react';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.flipIt = this.flipIt.bind(this);

    this.state = {
      isFlipped: false,
    };
  }

  flipIt() {
    !this.state.isFlipped
      ? this.setState({ isFlipped: true })
      : this.setState({ isFlipped: false });
  }

  render() {
    const {
      id, name, price, discount, brand, color,
    } = this.props.product;
    return (
      <div className="product-card-component" key={id}>
        <div
          className={
            this.state.isFlipped ? 'product-card flipped' : 'product-card'
          }
        >
          <div className="card-front">
            <div className="price-container">
              <h3>{name}</h3>
              <span className="price">{price}</span>
            </div>
            <div className="buy-container">
              <a className="button secondary" onClick={this.flipIt}>
                More Info
              </a>
              <a className="button primary">Buy</a>
            </div>
          </div>
          <div className="card-back">
            <div className="more-info">
              {price} - {discount} - {brand}
            </div>
            <div className="buy-container">
              <a className="button secondary" onClick={this.flipIt}>
                Back
              </a>
              <a className="button primary">Buy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
