import React from 'react';
import { View, TextInput } from 'react-native';
import Button from 'react-native-button';

import _ from 'lodash';

class AddTodo extends React.Component {

  constructor() {
    super()
    this.state = {value: ""};
    _.bindAll(this, ['handleChange', 'handlePress']);
  }

  handleChange(value) {
    this.setState({ value });
  }

  handlePress() {
    this.props.handleAdd(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleChange}
          value={this.state.value}
          />
        <Button onPress={this.handlePress}>Add todo</Button>
      </View>
    )
  }
}

export default AddTodo;
