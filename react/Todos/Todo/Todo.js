import React from 'react';
import { Text } from 'react-native'

class Todo extends React.Component {
  render() {
    return <Text>{this.props.todo.value}</Text>
  }
}

export default Todo;
