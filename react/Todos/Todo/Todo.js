import React from 'react';
import { View, Text, Switch } from 'react-native'
import _ from 'lodash';

class Todo extends React.Component {

  constructor(props) {
    super();
    _.bindAll(this, ['handleChange']);
    this.state = {value: props.completed};
  }

  handleChange(completed) {
    this.setState({ value: completed })
    this.props.handleToggle(this.props.id);
  }

  render() {

    return (
      <View>
        <Text>{this.props.value}</Text>
        <Switch value={this.state.value} onValueChange={this.handleChange}/>
      </View>
    )
  }
}

export default Todo;
        // <Switch value={this.state.value} onValueChange={this.props.handleChange} />
