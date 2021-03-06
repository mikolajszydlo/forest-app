import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import dashboardReducer from './dashboardRedux';

// define reducers
const reducers = {
  tasks: dashboardReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
);

export default store;
