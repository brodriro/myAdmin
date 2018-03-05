import React, { Component } from 'react';
import { AppRegistry, PropTypes, AsyncStorage, StatusBar,  StyleSheet, View, Image, ImageBackground,
} from 'react-native';
import { Thumbnail, Container, Content, Form, Item, Input, Label, Button, Icon, Text, StyleProvider,
        ListItem, Left, Right, Body, List, Toast,
 } from 'native-base';


import { Actions, ActionConst } from 'react-native-router-flux';

import getTheme from '../../native-base-theme/components';   
import material from '../../native-base-theme/variables/material';  

export default class Sidebar extends Component {
  
  
  
  render() {
    
    return (
       
      <StyleProvider style={getTheme(material)} >
        <Container  style={{
                  backgroundColor:"#fff",
                 }}  >

            <ImageBackground source={require('../images/background/box.png')}
              style={{ resizeMode: 'stretch', height:170, width:null, justifyContent:"center", alignItems:"center"}}>
            <Thumbnail />
              <Text style={{color:'#fff', marginTop:5}}>My Admin</Text>              
            </ImageBackground>
          
            <Content>
              
              <View style={{marginTop:10}}>
               
              
              </View>
               
              
            </Content>
        </Container>
      </StyleProvider>
     
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(70,116,220,1)",
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