import React from 'react';
import Select from 'react-select';
import * as Animated from 'react-select/lib/animated';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { colorFilter } from './../../actions';

class ColorFilter extends React.Component {
  state = {
    value: '',
    colors: [],
  };

  async componentDidMount() {
    const colorsApi = await axios('/api/colors');
    const colors = [];
    colorsApi.data.map(c =>
      colors.push({
        label: c.color,
        value: c.color,
      }));
    this.setState({ colors });
  }

  render() {
    this.props.dispatch(colorFilter(this.state.value));
    return (
      <React.Fragment>
        {this.state.colors.length && (
          <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            components={Animated}
            onChange={value => this.setState({ value })}
            onMenuClose={() => {
              if (this.state.value.length) {
                const result = this.state.value.map(a => a.label);
                this.props.dispatch(colorFilter(Object.values(result).toString()));
              }
            }}
            options={this.state.colors}
            placeholder="Select color(s)"
            simpleValue
            value={this.state.value}
          />
        )}
      </React.Fragment>
    );
  }
}

ColorFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ColorFilter);
