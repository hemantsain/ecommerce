import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Styles } from '../../../styles';
import connect from 'react-redux/lib/connect/connect';
import { PropTypes } from 'prop-types';
import { clearCart } from '../../../state/actions';

const ThankYouScreen = (props) => {
  props.clearCart();
  return (
    <SafeAreaView style={Styles.appContainer}>
      <View style={Styles.container}>
        <Text style={Styles.thankYouTextStyle}>Thank You</Text>
      </View>
    </SafeAreaView>
  );
};
ThankYouScreen.propTypes = {
  clearCart: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
export default connect(null, mapDispatchToProps)(ThankYouScreen);
