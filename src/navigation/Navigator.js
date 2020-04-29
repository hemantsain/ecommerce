import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../home/screens/HomeScreen';
import CartButton from '../components/CartButton/CartButton';
import DetailScreen from '../home/screens/Details/DetailScreen';
import CheckoutScreen from '../home/screens/Checkout/CheckoutScreen';
import ThankYouScreen from '../home/screens/ThankYou/ThankYouScreen';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Home',
      headerRight: () => <CartButton navigation={navigation} />,
    }),
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details',
      headerRight: () => <CartButton navigation={navigation} />,
    }),
  },
  CheckOut: {
    screen: CheckoutScreen,
    navigationOptions: {
      headerTitle: 'CheckOut',
    },
  },
  ThankYou: {
    screen: ThankYouScreen,
    navigationOptions: {
      headerTitle: 'Thank You',
    },
  },
});

const AppContainer = createAppContainer(HomeStackNavigator);

export default function Navigator() {
  return <AppContainer />;
}
