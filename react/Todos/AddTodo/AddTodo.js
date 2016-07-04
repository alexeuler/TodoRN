import React, { PropTypes } from 'react';
import { View, TextInput } from 'react-native';
import Button from 'react-native-button';
import _ from 'lodash';

import Styles from './Styles'

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
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            onChangeText={this.handleChange}
            value={this.state.value}
            />
        </View>
        <Button onPress={this.handlePress} style={Styles.button}>Add todo</Button>
      </View>
    )
  }
}

AddTodo.propTypes = {
  handleAdd: PropTypes.func.isRequired
}

export default AddTodo;
