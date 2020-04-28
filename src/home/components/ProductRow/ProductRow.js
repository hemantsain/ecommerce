import React from 'react';
import { View, Image, Text } from 'react-native';
import Counter from 'react-native-counters';
import ProductRowStyle from './ProductRow.styles';

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
              onChange={(value) => console.log('value', value)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProductRow;
