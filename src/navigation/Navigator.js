import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../home/screens/HomeScreen';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
});

const AppContainer = createAppContainer(HomeStackNavigator);

export default function Navigator() {
  return <AppContainer />;
}
