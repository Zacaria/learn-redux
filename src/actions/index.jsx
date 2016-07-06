import {v4} from 'node-uuid';
import * as api from '../api';
import {getIsFetching} from '../reducers';

// This action is a thunk The given dispatch is also wrapped with thunk
// middleware So it can dispatch both thunks and plain actions
export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    // return a promise to match the other return
    return Promise.resolve();
  }

  dispatch({type: 'FETCH_TODOS_REQUEST', filter});

  return api
    .fetchTodos(filter)
    .then(response => {
      dispatch({type: 'FETCH_TODOS_SUCCESS', filter, response});
    }, error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Default error'
      });
    });
};

export const addTodo = (text) => {
  return {type: 'ADD_TODO', id: v4(), text}
};

export const toggleTodo = (id) => ({type: 'TOGGLE_TODO', id});
