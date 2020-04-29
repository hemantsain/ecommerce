import { StyleSheet } from 'react-native';
// import Colors from './Colors';

let CheckoutRowStyle = StyleSheet.create({
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
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 5,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
export default CheckoutRowStyle;
