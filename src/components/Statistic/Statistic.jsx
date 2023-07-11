import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Component } from 'react';
import TextConent from 'components/TextContent/TextConent';
import StatisticElement from 'components/StatisticElement/StatisticElement';

class Statistic extends Component {
  state = {
    good: null,
    neutral: null,
    bad: null,
  };

  // handleSubmit = evt => {
  //   console.log(evt.target.name);
  // };

  handleClick = evt => {
    // console.log(evt.target.name);
    return this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };
  render() {
    return (
      <>
        <TextConent props={this.state} />
        <StatisticElement props={this.handleClick} />
      </>
    );
  }
}

Statistic.propTypes = {};

export default Statistic;
