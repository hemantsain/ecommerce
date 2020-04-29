import React from 'react';
import { View, Image, Text } from 'react-native';
import Counter from 'react-native-counters';
import ProductRowStyle from './ProductRow.styles';
import connect from 'react-redux/lib/connect/connect';
import { updateCartCounter } from '../../state/actions';
import { PropTypes } from 'prop-types';

const ProductRow = (props) => {
  return (
    <View style={ProductRowStyle.rowContainer}>
      <View style={ProductRowStyle.itemContainer}>
        <Image
          style={ProductRowStyle.imageStyle}
          resizeMode="contain"
          source={{ uri: props.item.largeImage }}
        />
        <View style={ProductRowStyle.textContainer}>
          <Text>{props.item.name}</Text>
          <Text>{props.item.onlineAvailabilityText}</Text>
          <View style={ProductRowStyle.counterContainer}>
            <Counter
              start={0}
              onChange={(number, type) => {
                // // let cartMap = props.cartCounter;
                // props.cartCounter.set(props.item, number);
                // console.log('Number ', number, 'CartMap ', props.cartCounter);
                let data = {
                  item: props.item,
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
ProductRow.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
