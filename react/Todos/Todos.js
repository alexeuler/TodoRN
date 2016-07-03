import React from 'react';
import { Text, View, ListView } from 'react-native'

import AddTodo from './AddTodo/AddTodo'

class Todos extends React.Component {

  todos() {
    var todos = this.props.todos;
    return new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(todos);
  }

  render() {
    return (
      <View>
        <ListView
        dataSource={this.todos()}
        renderRow={(todo) => <Text>{todo}</Text>}
        />
      <AddTodo handleAdd={this.props.handleAdd}/>
      </View>
    )
  }
}

export default Todos;
