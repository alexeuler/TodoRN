import React from 'react';
import { View, Text, ListView } from 'react-native'

import _ from 'lodash';

class Todos extends React.Component {
  render() {
    return (
      <View>
      { _.map(this.props.todos, (todo, key) => <Text key={key}>{todo}</Text>) }
      </View>
    )
  }
}

export default Todos;
