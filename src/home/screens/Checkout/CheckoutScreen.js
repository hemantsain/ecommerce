import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Styles } from '../../../styles';
import CheckoutStyle from './CheckoutStyle.styles';
import connect from 'react-redux/lib/connect/connect';
import { PropTypes } from 'prop-types';
import { updateCartCounter } from '../../../state/actions';
import ProductRow from '../../../components/ProductRow/ProductRow';

const CheckoutScreen = (props) => {
  const _onPress = () => {
    props.navigation.navigate('ThankYou');
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this._onPress(item)}>
      <ProductRow id={item.sku} item={item} />
    </TouchableOpacity>
  );

  const ItemSeparator = () => {
    return <View style={Styles.separatorStyle} />;
  };
  return (
    <SafeAreaView style={Styles.appContainer}>
      <View style={Styles.container}>
        <View>
          {/* <FlatList
            ItemSeparatorComponent={ItemSeparator}
            data={
              this.state.data && this.state.data.length > 0
                ? this.state.data
                : this.props.listPostData
            }
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          /> */}
        </View>
        <View style={CheckoutStyle.buttonContainerStyle}>
          <Button title="Payment" onPress={_onPress} />
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
