import React from 'react';
import { Text, ListView } from 'react-native'

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
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(todo) => <Text>{todo}</Text>}
      />
    )
  }
}

export default Todos;
