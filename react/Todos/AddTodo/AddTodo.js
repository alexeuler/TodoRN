import React from 'react';
import { View, TextInput } from 'react-native';
import Button from 'react-native-button';

class AddTodo extends React.Component {
  render() {
    return (
      <View>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
        <Button>Add todo</Button>
      </View>
    )
  }
}

export default AddTodo;
