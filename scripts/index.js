import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import { initialState } from './reducers/reducer';

export function configureStore() {
    const store = createStore(reducer, initialState, applyMiddleware(thunk));
    return store;
  }
  export const store = configureStore();
  
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root'),
  );
  
