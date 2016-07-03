import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Todos from './Todos/Todos'

class Main extends React.Component {

  constructor() {
    super()
    _.bindAll(this, ['handleAdd']);
    this.state = {todos: []}
  }

  handleAdd(todo) {
    var todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos });
  }

  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        >
        <Todos tabLabel="All" todos={this.state.todos} handleAdd={this.handleAdd} />
        <Todos tabLabel="Uncompleted" todos={[1]} handleAdd={this.handleAdd} />
        <Todos tabLabel="Completed" todos={[2]} handleAdd={this.handleAdd} />
      </ScrollableTabView>
    );
  }
}

export default Main;
