import { StyleSheet } from 'react-native'
import Colors from '../../Colors';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: Colors.green,
    borderBottomWidth: 3,
  },
  input: {
    width: 500,
    flex: 10,
    height: 60,
    padding: 10,
    fontSize: 20
  },
  button: {
    paddingTop:10
  }
})

export default Styles;
