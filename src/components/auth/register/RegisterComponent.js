import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

import formBuilder from 'tcomb-form-native';
import formstyles from 'src/styles/form';
import styles from '../StyleSheet';

const RegisterForm = formBuilder.form.Form;

let User = formBuilder.struct({
    email : formBuilder.String,
    password : formBuilder.String,
});

let options = {
  stylesheet: formstyles,
  fields : {
    email : {
      placeholder: 'Your email address',
    },
    password: {
      password : true,
      secureTextEntry: true,
      placeholder: 'Enter your password'
    }
  }
}


export default class RegisterComponent extends Component {
  handleLogin = () => {

    let {email, password} = this.refs.form.getValue();
    if(!this.props.user){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        
        this.props.handleAuth(res).then(() => {

          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            })
          )
        });
        
      })
      .catch((error) => {
        console.log(error);
      })
    }  
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View>  
          <RegisterForm
            ref="form"
            type={User}
            options={options}
          />
          <TouchableHighlight style={formstyles.button} onPress={this.handleLogin} underlayColor='#99d9f4'>
            <Text style={formstyles.buttonText}>Register</Text>
          </TouchableHighlight>         
        </View>
      </View>
    );
  }
}


RegisterComponent.propTypes = {
  user : PropTypes.object,
  handleAuth : PropTypes.func.isRequired
}
