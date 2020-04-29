import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import connect from 'react-redux/lib/connect/connect';
import CartButtonStyle from './CartButton.styles';

const CartButton = (props) => {
  let counter = 0;
  props.cartCounter.map((data) => {
    counter += data.number;
  });
  const _onPress = () => {
    props.navigation.navigate('CheckOut');
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={CartButtonStyle.itemContainer}>
        <Icon type="font-awesome" name="shopping-cart" />
        <View style={CartButtonStyle.counterViewStyle}>
          <Badge value={counter} status="success" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const mapStateToProps = (state) => {
  return {
    cartCounter: state.appReducer.cartCounter,
  };
};
export default connect(mapStateToProps, null)(CartButton);
