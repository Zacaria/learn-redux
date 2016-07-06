import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching} from '../reducers';
import TodoList from '../components/TodoList';

class VisibleTodoList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const {filter, fetchTodos} = this.props;
    // The component doesn't know it calls async action Nor that it dispatches
    // multiple actions
    fetchTodos(filter);
  }

  render() {
    const {toggleTodo, todos, isFetching} = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading..</p>;
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo}/>;
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  };
};

VisibleTodoList =
//Give access to router params into mapStateToProps
withRouter(
// Subscribe to the store
connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;
VisibleTodoList;
