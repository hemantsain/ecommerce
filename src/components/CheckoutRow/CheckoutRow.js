import React from 'react';
import { View, Image, Text } from 'react-native';
import Counter from 'react-native-counters';
import CheckoutRowStyle from './CheckoutRowStyle.styles';
import connect from 'react-redux/lib/connect/connect';
import { updateCartCounter } from '../../state/actions';
import { PropTypes } from 'prop-types';

const CheckoutRow = (props) => {
  return (
    <View style={CheckoutRowStyle.rowContainer}>
      <View style={CheckoutRowStyle.itemContainer}>
        <Image
          style={CheckoutRowStyle.imageStyle}
          resizeMode="contain"
          source={{ uri: props.item.item.largeImage }}
        />
        <View style={CheckoutRowStyle.textContainer}>
          <Text>{props.item.item.name}</Text>
          <Text>{props.item.item.onlineAvailabilityText}</Text>
          <View style={CheckoutRowStyle.counterContainer}>
            <Counter
              start={(props.item.item && props.item.number) || 0}
              onChange={(number, type) => {
                let data = {
                  item: props.item.item,
                  number,
                };
                props.updateCartCounter(data);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
CheckoutRow.propTypes = {
  updateCartCounter: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    cartCounter: state.appReducer.cartCounter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateCartCounter: (data) => dispatch(updateCartCounter(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutRow);
