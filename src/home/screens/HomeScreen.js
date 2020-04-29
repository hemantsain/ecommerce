import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { fetchSearchList } from '../../state/actions';
import { Styles } from '../../styles';
import connect from 'react-redux/lib/connect/connect';
import ProductRow from '../../components/ProductRow/ProductRow';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.listPostData,
    };
  }

  componentDidMount() {
    this.props.getListData(this.state.count);
  }

  _onPress = (item) => {
    this.props.navigation.navigate('Details', item);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this._onPress(item)}>
      <ProductRow id={item.sku} item={item} />
    </TouchableOpacity>
  );

  ItemSeparator = () => {
    return <View style={Styles.separatorStyle} />;
  };

  render() {
    return (
      <SafeAreaView style={Styles.appContainer}>
        <View style={Styles.container}>
          <FlatList
            ItemSeparatorComponent={this.ItemSeparator}
            data={
              this.state.data && this.state.data.length > 0
                ? this.state.data
                : this.props.listPostData
            }
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  getListData: PropTypes.func,
  // updateCartCounter: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    listPostData: state.appReducer.listData,
    isLoading: state.appReducer.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getListData: (value) => dispatch(fetchSearchList(value)),
  // updateCartCounter: (value) => dispatch(updateCartCounter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
