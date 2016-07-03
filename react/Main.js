import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Todos from './Todos/Todos'

class Main extends React.Component {
  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        >
        <Todos tabLabel="All" todos={[1,2]}/>
        <Todos tabLabel="Uncompleted" todos={[1]}/>
        <Todos tabLabel="Completed" todos={[2]}/>
      </ScrollableTabView>
    );
  }
}

export default Main;
