import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Todos from './Todos/Todos'
import Styles from './Styles'

class Main extends React.Component {

  constructor() {
    super()
    _.bindAll(this, ['handleAdd', 'handleToggle']);
    this.state = {todos: []}
  }

  handleAdd(todo) {
    var todos = this.state.todos;

    todos.push({ value: todo, completed: false, id: todos.length });
    this.setState({ todos });
    console.log(this.state);
  }

  handleToggle(index, completed) {
    var todos = this.state.todos;
    todos[index].completed = completed;
    this.setState({ todos });
    console.log(this.state);
  }

  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        style={Styles.container}
        >
        <Todos tabLabel="All" todos={this.state.todos} handleAdd={this.handleAdd} handleToggle={this.handleToggle} filter="unfiltered" />
        <Todos tabLabel="Uncompleted" todos={this.state.todos} handleAdd={this.handleAdd} handleToggle={this.handleToggle} filter="uncompleted" />
        <Todos tabLabel="Completed" todos={this.state.todos} handleAdd={this.handleAdd} handleToggle={this.handleToggle} filter="completed"/>
      </ScrollableTabView>
    );
  }
}

export default Main;
