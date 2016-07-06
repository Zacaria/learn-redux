import {v4} from 'node-uuid';
import * as api from '../api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REQUEST_TODOS = 'REQUEST_TODOS';

const requestTodos = (filter, response) => ({type: REQUEST_TODOS, filter});

const receiveTodos = (filter, response) => ({type: RECEIVE_TODOS, filter, response});

// This action is a thunk The given dispatch is also wrapped with thunk
// middleware So it can dispatch both thunks and plain actions
export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter));

  return api
    .fetchTodos(filter)
    .then(response => {
      dispatch(receiveTodos(filter, response))
    });
};

export const addTodo = (text) => {
  return {type: ADD_TODO, id: v4(), text}
};

export const toggleTodo = (id) => ({type: TOGGLE_TODO, id});
