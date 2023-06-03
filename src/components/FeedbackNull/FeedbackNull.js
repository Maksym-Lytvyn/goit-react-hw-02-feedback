import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackNull extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}
FeedbackNull.propTypes = {
  message: PropTypes.string.isRequired,
};
