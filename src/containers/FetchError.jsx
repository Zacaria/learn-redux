import React from 'react';

class FetchError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Could not fetch todos : {this.props.message}</p>
        <button onClick={this.props.onRetry}>Retry</button>
      </div>
    )
  }
}

export default FetchError;
