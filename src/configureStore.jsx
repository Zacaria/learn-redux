import {createStore, applyMiddleware} from 'redux';
import todoApp from './reducers';
import createLogger from 'redux-logger';

//The thunk middleware is a curried function
const thunk = (store) => (next) => (action) => typeof action === 'function'
//The action is given the dispatch so that it can dispatch other actions
  ? action(store.dispatch)
  // once we get here, the action is a plain object it is usable by the
  // createLogger middleware
  : next(action);

const configureStore = () => {
  //only plain object reach createLogger middleware and then reducers
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
