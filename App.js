import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import AppWithNavigationState from './src/navigators/AppNavigator';
import configureStore from './src/store';

import firebaseConfig from './firebase.config.json';

class App extends Component {
	store = configureStore();
  
  constructor(){
    super();
    firebase.initializeApp(firebaseConfig);
  }
  
  render(){
    return(
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;