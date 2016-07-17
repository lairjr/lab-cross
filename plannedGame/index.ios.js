 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './app/reducers';
import LoginView from './app/views/login';
import React, { Component } from 'react';

const reducer = combineReducers(appReducers);
const store = createStore(reducer);

class plannedGame extends Component {
  render() {
    return (
      <Provider store={ store }>
        <LoginView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('plannedGame', () => plannedGame);
