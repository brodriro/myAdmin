import React, { Component,Drawer} from 'react';
import { StackNavigator } from 'react-navigation';
import {Scene, Router, ActionConst, Reducer} from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';   
import material from './native-base-theme/variables/material'; 

import Scan from './app/views/scan';
import Main from './app/views/main'

nextScene="";

const reducerCreate = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    if (action.scene) nextScene = action.scene.name;
    //ConfigActions.setCurrentRoute(action.scene.name);
    return defaultReducer(state, action);
  }
}
export default class App extends Component{
  render() {
    return (

      <StyleProvider  style={getTheme(material)}>          
        <Main>
          <Router createReducer={reducerCreate} >
            <Scene key="root">
              <Scene key="scan" component={Scan} hideNavBar initial={true}/>          
            </Scene>
          </Router>
        </Main>
        
      </StyleProvider>
    );
  }
}


