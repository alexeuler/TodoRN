/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './react/Main';

class todo extends React.Component {
  render() {
    return <Main />
  }
}

AppRegistry.registerComponent('todo', () => todo);
