import React from 'react';
import { Navigator } from 'react-native';

import Main from './Main/Main'

class Navigation extends React.Component {
  render() {
    return (
      <Navigation
      initialRoute={{name: 'Todos', index: 0}}
      renderScene={(route, navigator) => {
        return <Main />
      }}
      />
    );
  }
}

export default Navigation;
