import React, { Component } from 'react';
import { AppRegistry,  AsyncStorage, StatusBar,  StyleSheet, View} from 'react-native';
import { Thumbnail, Container, Content, List, ListItem, Item, Input, Label, Button,Icon, 
        Text, Drawer, Left, Body,Right, Header, Title,} from 'native-base';

import { Actions } from 'react-native-router-flux';
import Sidebar from '../sidebar/sidebar';

export default class Main extends Component {
  
  state={
    drawerOpen:false,
    drawerDisable:false,
  }
  
  componentDidMount(){
    
  }


  componentWillUnmount(){
    
  }
  
  
  render() {
    closeDrawer = () => {
        this.drawer._root.close()
      
    }; 
  
    openDrawer = () => {
      this.drawer._root.open()
    };
    
    return (
      
       <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<Sidebar closeDrawer={closeDrawer} />}
              onClose={() => {
                  //this.drawer._root.close()
              }} >
          {this.props.children}
      </Drawer>
       
     
    );
  }
}