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

  handleSubmit = evt => {
    console.log(evt.target.name);
  };

  handleClick = evt => {
    console.log(evt.target.name);

    return this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   const total = good + neutral + bad;
  //   console.log(this.state);
  //   return this.state;
  // };
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    console.log(positivePercentage);
    return (
      <>
        <TextConent
          props={this.state}
          summ={total}
          positiv={positivePercentage}
        />
        <StatisticElement props={this.handleClick} />
      </>
    );
  }
}

Statistic.propTypes = {};

export default Statistic;
