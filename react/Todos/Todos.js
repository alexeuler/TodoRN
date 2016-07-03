import React from 'react';
import { Text, View, ListView } from 'react-native'

import AddTodo from './AddTodo/AddTodo'

class Todos extends React.Component {

  constructor(props, context) {
    super(props, context);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };

  }

  render() {
    return (
      <View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(todo) => <Text>{todo}</Text>}
        />
        <AddTodo />
      </View>
    )
  }
}

export default Todos;
