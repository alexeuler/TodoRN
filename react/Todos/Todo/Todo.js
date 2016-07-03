import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native'
import _ from 'lodash';

class Todo extends React.Component {

  constructor(props) {
    super();
    _.bindAll(this, ['handleChange']);
    this.state = {value: props.completed};
  }

  componentWillReceiveProps(props) {
    this.setState({value: props.completed});
  }

  handleChange(completed) {
    this.setState({ value: completed })
    this.props.handleToggle(this.props.id, completed);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.value}</Text>
        <View style={styles.switchContainer}>
          <Switch value={this.state.value} onValueChange={this.handleChange}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    padding: 10,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1
  },
  text: {
    flex: 2,
    fontSize: 20
  },
  switchContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  switch: {

  }
})

export default Todo;
