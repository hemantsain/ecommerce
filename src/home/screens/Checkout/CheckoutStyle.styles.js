import { StyleSheet } from 'react-native';
// import Colors from './Colors';

let CheckoutStyle = StyleSheet.create({
  rowContainer: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  imageStyle: {
    width: '100%',
    height: 180,
  },
  textContainerStyle: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default CheckoutStyle;
