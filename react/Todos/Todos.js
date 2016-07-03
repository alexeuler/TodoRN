import React from 'react';
import { Text, View, ListView } from 'react-native';

import AddTodo from './AddTodo/AddTodo';
import Todo from './Todo/Todo';

class Todos extends React.Component {

  todos() {
    var todos = this.props.todos;
    return new ListView.DataSource({rowHasChanged: (r1, r2) => r1.value !== r2.value}).cloneWithRows(todos);
  }

  render() {
    return (
      <View>
        <ListView
        dataSource={this.todos()}
        renderRow={(todo, section, row) => (
          <Todo
            key={parseInt(row)}
            id={parseInt(row)}
            value={todo.value}
            completed={todo.completed}
            handleToggle={this.props.handleToggle}
            />
        )} />
      <AddTodo handleAdd={this.props.handleAdd}/>
      </View>
    )
  }
}

export default Todos;
