import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, Text } from 'react-native';
import { Styles } from '../../../styles';
import DetailScreenStyle from './DetailScreen.styles';
import connect from 'react-redux/lib/connect/connect';
import { PropTypes } from 'prop-types';
import { updateCartCounter } from '../../../state/actions';

const DetailScreen = (props) => {
  const item = props.navigation.state.params;
  return (
    <SafeAreaView style={Styles.appContainer}>
      <View style={Styles.container}>
        <Image
          style={DetailScreenStyle.imageStyle}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <View style={DetailScreenStyle.textContainerStyle}>
          <Text style={DetailScreenStyle.titleStyle}>{item.name}</Text>
          <Text>{item.longDescription}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
DetailScreen.propTypes = {
  updateCartCounter: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    cartCounter: state.appReducer.cartCounter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateCartCounter: (value) => dispatch(updateCartCounter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
