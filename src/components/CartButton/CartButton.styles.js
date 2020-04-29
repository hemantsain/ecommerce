import { StyleSheet } from 'react-native';
// import Colors from './Colors';

let CartButtonStyle = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: '100%',
    margin: 10,
  },
  counterViewStyle: {
    flex: 1,
    width: '100%',
    zIndex: 5,
    marginTop: -10,
    position: 'absolute',
  },
});
export default CartButtonStyle;
