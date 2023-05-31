import { Component } from 'react';

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
