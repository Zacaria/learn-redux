import React from 'react';
import {Link} from 'react-router';

class FilterLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link
        to={this.props.filter === 'all'
        ? ''
        : this.props.filter}
        activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
        {this.props.children}
      </Link>
    );
  }
}

export default FilterLink;
