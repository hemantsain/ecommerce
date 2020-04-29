import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Styles } from '../../../styles';
import CheckoutStyle from './CheckoutStyle.styles';
import connect from 'react-redux/lib/connect/connect';
import { PropTypes } from 'prop-types';
import { updateCartCounter } from '../../../state/actions';
import CheckoutRow from '../../../components/CheckoutRow/CheckoutRow';

const CheckoutScreen = (props) => {
  const _onPress = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    props.navigation.dispatch(action);
    props.navigation.navigate('ThankYou');
  };
  const renderItem = ({ item }) => <CheckoutRow id={item.sku} item={item} />;

  const ItemSeparator = () => {
    return <View style={Styles.separatorStyle} />;
  };
  return (
    <SafeAreaView style={Styles.appContainer}>
      <View style={Styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            ItemSeparatorComponent={ItemSeparator}
            data={
              props.cartCounter &&
              props.cartCounter.length > 0 &&
              props.cartCounter
            }
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={CheckoutStyle.buttonContainerStyle}>
            <Button title="Payment" onPress={_onPress} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
CheckoutScreen.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
