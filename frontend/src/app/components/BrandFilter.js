import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { brandFilter } from './../../actions';

class BrandFilter extends React.Component {
  state = {
    value: '',
  };

  render() {
    this.props.dispatch(brandFilter(this.state.value));
    return (
      <input
        onChange={e => {
          const { value } = e.target;
          this.setState({ value });
          this.props.dispatch(brandFilter(value));
        }}
      />
    );
  }
}

BrandFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BrandFilter);
