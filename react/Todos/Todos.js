import React from 'react';
import { Text, View, ListView } from 'react-native';
import _ from 'lodash';

import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo/Todo';

class Todos extends React.Component {

  constructor() {
    super();
    _.bindAll(this, ['todos']);
  }

  todos() {
    return _.filter(this.props.todos, (todo) => {
      switch (this.props.filter) {
        case "completed":
        return todo.completed;
        case "uncompleted":
        return !todo.completed;
      }
      return true;
    });
  }

  render() {
    console.log(this.props.filter)
    return (
      <View>
        {_.map(this.todos(), (todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            value={todo.value}
            completed={todo.completed}
            handleToggle={this.props.handleToggle}
            />
        ))}
        <AddTodo handleAdd={this.props.handleAdd}/>
      </View>
    )
  }
}

export default Todos;
