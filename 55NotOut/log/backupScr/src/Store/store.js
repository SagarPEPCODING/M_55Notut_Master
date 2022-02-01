import CombinedReducers from '../CombinedReducer/combinedreducer';

import { createStore } from 'redux';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
console.log(persistedState);
let obj = {};
if (persistedState != undefined && persistedState.length > 0) {
  obj = JSON.parse(persistedState);
}

const store = createStore(
  CombinedReducers,
  obj,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
