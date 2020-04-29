import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Styles } from '../../../styles';
import connect from 'react-redux/lib/connect/connect';
import { PropTypes } from 'prop-types';
import { updateCartCounter } from '../../../state/actions';

const ThankYouScreen = (props) => {
  return (
    <SafeAreaView style={Styles.appContainer}>
      <View style={Styles.container}>
        <Text>Thank YOu</Text>
      </View>
    </SafeAreaView>
  );
};
ThankYouScreen.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(ThankYouScreen);
