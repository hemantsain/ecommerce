import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputStyle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  rowContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  separatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  thankYouTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.green,
  },
});
