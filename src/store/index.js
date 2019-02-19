import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../pages/Home/store'

// const reducer = (state = { name: 'walkerbe' }, action) => {
//   return state;
// }

const reducer = combineReducers({
  home: homeReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}
