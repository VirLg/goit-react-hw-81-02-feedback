import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistic extends Component {
  handleClick = evt => {
    console.log(evt.target.name);
  };
  render() {
    return (
      <>
        <button type="button" name="good" onClick={this.handleClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleClick}>
          Bad
        </button>
      </>
    );
  }
}

Statistic.propTypes = {};

export default Statistic;
