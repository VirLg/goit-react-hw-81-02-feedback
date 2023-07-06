import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class TextConent extends Component {
  handleEditText = () => {};
  render() {
    return (
      <>
        <h1>Statistics</h1>
        <p>
          Good: <span>{span}</span>
        </p>
        <p>
          Neutral: <span></span>
        </p>

        <p>
          Bad: <span></span>
        </p>
      </>
    );
  }
}

TextConent.propTypes = {};

export default TextConent;
