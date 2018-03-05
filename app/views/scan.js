import React, { Component } from 'react';
import { AppRegistry,  AsyncStorage,Platform, StatusBar,  StyleSheet, View, Image,Dimensions, ActivityIndicator} from 'react-native';

import { Thumbnail, Container, Footer, FooterTab,Content, Form, Item, Input, Label, Button, Icon, Text, Drawer,
  StyleProvider, Header, Left, Right,Body,Title, Toast
} from 'native-base';

import { Actions,ActionConst } from 'react-native-router-flux';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
export default class Scan extends Component  {
 
    
    render() {
        return(
          <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
           
        )
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