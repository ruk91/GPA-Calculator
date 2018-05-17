import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, DrawerNavigator, NavigationActions,Icon } from 'react-navigation';

import HomePage from './src/pages/HomePage/HomePage';


export default class App extends Component {
    constructor(props) {
          super(props)
            this.state = {
              initialRoute: ''
            }
    }

  render() {
    Text.defaultProps.allowFontScaling=false
      const MainNavigator = StackNavigator({
        HomePage: { screen: HomePage },
      },
        {initialRouteName:this.state.initialRoute})
        console.disableYellowBox = true;
      return <MainNavigator />     

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});