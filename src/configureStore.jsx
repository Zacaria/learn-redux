import {createStore, applyMiddleware} from 'redux';
import todoApp from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const configureStore = () => {
  // middlewares are applied in reverse order so that the promise is the upper
  // wrapper of dispatch
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
