import React, { PropTypes } from 'react';
import { View } from 'react-native';
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

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Todos;
