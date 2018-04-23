import React, { Component } from 'react';
import { AppRegistry, PropTypes, AsyncStorage, StatusBar,  StyleSheet, View, Image, ImageBackground} from 'react-native';
import { Thumbnail, Container, Content,  Icon, Text, ListItem, Left, Right, Body, List} from 'native-base';
import { Actions } from 'react-native-router-flux';

import getTheme from '../../native-base-theme/components';   
import material from '../../native-base-theme/variables/material';  

export default class Sidebar extends Component {
  
  render() {

  
    var menu = [
      { menu: 'Scan', icon:'cart', navigated:function(){Actions.scan()}},
    ];


    return (
       
   
        <Container  style={{ backgroundColor:"#fff"}}  >

            <ImageBackground
              source= {ConfiguracionApp.LOGO.IMAGEN}
              style={{ height:170, width:null, justifyContent:"center", alignItems:"center"}}>
            <Thumbnail  large source={{uri:''}}/>
              <Text style={{color:'#fff', marginTop:5}}>{Session.nombre}</Text>
              <Text style={{color:'#fff'}}>{Session.apellido}</Text>
            </ImageBackground>
          
            <Content>
              
              <View style={{marginTop:10}}>
                <List dataArray={menu}
                    renderRow={(item) => {                    
                      return(
                        <ListItem icon style={{marginTop:3, marginBottom:3}}
                              onPress= {() => {this.props.closeDrawer(); item.navigated()}}>
                            <Left style={{borderBottomWidth:0}}>
                                <Icon name={item.icon} style={{color:ConfiguracionApp.PRIMARY_COLOR}} />
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                              <Text>{item.menu}</Text>
                            </Body>
                            <Right style={{borderBottomWidth:0}}/>
                        </ListItem>
                      )}
                  }>
              
             </List>
              
              </View>
               
              
            </Content>
        </Container>
     
    );
  }
}

