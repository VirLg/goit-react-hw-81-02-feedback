import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const TextConent = ({ props: { good, neutral, bad } }) => {
  console.log(good);
  return (
    <>
      <h1>Statistics</h1>

      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>

      <p>
        Bad: <span>{bad}</span>
      </p>
    </>
  );
};

TextConent.propTypes = {};

export default TextConent;
