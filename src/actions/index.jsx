import {v4} from 'node-uuid';
import * as api from '../api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

const receiveTodos = (filter, response) => ({type: RECEIVE_TODOS, filter, response});

//Async action creator
export const fetchTodos = (filter) => api
  .fetchTodos(filter)
  .then(response => receiveTodos(filter, response));

export const addTodo = (text) => {
  return {type: ADD_TODO, id: v4(), text}
};

export const toggleTodo = (id) => ({type: TOGGLE_TODO, id});
