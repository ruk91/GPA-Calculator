import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, Image, ScrollView, Animated, Dimensions } from 'react-native';

import pic from "../../Assests/Images/bg.png";

const window = Dimensions.get('window');

export default class stallPlan extends Component {
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
    
        
        return {
          title: 'Home Page',
          headerTintColor: '#000',
        //   headerStyle:{
            titleStyle: {
              color: '#000',
              //fontFamily: 'Signika-Regular'
            },
            
         //},
          headerStyle: { backgroundColor: 'transparent', position: 'absolute',top: 0,left: 0,right: 0,},
          headerTitleStyle:{
              fontFamily:'Nunito-Black',
            fontWeight:'500',
            fontSize:24,
            marginTop:5,
            alignSelf:'center',
            textAlign:'center',
            flex: 0.9
        },
            headerIconStyle: {
              color: '#000'},
              tintColor: '#000', 
              
          };
        };
    
  press() {
		//do anything you want
	}
  constructor(props) {
    super(props);
      
  }

  render() {

    // const { navigation } = this.props;
    // const {goBack} = this.props;

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={pic} style={styles.screenBg}>
                <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
                
                </View>
            </ImageBackground> 
        </View> 

      
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  screenBg: {
	  flex: 1,
    },
  footer:{ 
		position: 'absolute',
		bottom: 0, 
		marginLeft: (window.width)*.425,
		marginRight: (window.width)*.425,
		marginBottom:(window.width)*.02, 
    marginTop:(window.width)*.02, 
		justifyContent: 'center',
		alignItems: 'center'
	},
  menuBtn:{
		height: (window.width)*0.15,
    width: (window.width)*0.15,
    margin: (window.width)*0.005
	},

});