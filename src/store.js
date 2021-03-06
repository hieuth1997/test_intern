import thunk from 'redux-thunk';
import appReducer from './reducers'
import {createStore, applyMiddleware,compose } from 'redux';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(
    appReducer,
    enhancer
)

export default store