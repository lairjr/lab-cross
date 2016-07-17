import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './app/reducers';
import LoginView from './app/views/login';
import React from 'react';

const reducer = combineReducers(appReducers);
const store = createStore(reducer);

const plannedGame = () =>  {
  return (
    <Provider store={ store }>
      <LoginView />
    </Provider>
  );
}

AppRegistry.registerComponent('plannedGame', () => plannedGame);
