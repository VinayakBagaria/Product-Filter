import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import * as Animated from 'react-select/lib/animated';
import { connect } from 'react-redux';
import axios from 'axios';
import { colorFilter } from './../../actions';

type Color = {
  label: string,
  value: string,
};

type State = {
  value: Array<Color>,
  colors: Array<Color>,
};

type Props = {
  dispatch: Function,
};

class ColorFilter extends Component<Props, State> {
  state = {
    value: [],
    colors: [],
  };

  async componentDidMount() {
    const colorsApi: any = await axios('/api/colors');
    const colors: Array<Color> = [];
    colorsApi.data.map(c =>
      colors.push({
        label: c.color,
        value: c.color,
      })
    );
    this.setState({ colors });
  }

  render() {
    const { value, colors } = this.state;
    return (
      <Fragment>
        {colors.length && (
          <Select
            className="multi-select"
            closeMenuOnSelect={false}
            isMulti
            components={Animated}
            onChange={val => this.setState({ value: val })}
            onMenuClose={() => {
              if (value.length) {
                const result: string = Object.values(
                  value.map(a => a.label)
                ).toString();
                this.props.dispatch(colorFilter(result));
              } else {
                this.props.dispatch(colorFilter(''));
              }
            }}
            options={this.state.colors}
            placeholder="Select color(s)"
            simpleValue
            value={this.state.value}
          />
        )}
      </Fragment>
    );
  }
}

export default connect()(ColorFilter);
