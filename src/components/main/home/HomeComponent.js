import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MainComponent extends Component {
  logOut = () => {
    this.props.handleAuth(null).then(() => {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login'})
          ]
        })
      )
    }).catch(err => console.log(err));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button onPress={this.logOut} title="Log out"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

MainComponent.propTypes = {
  user : PropTypes.object,
  handleAuth : PropTypes.func.isRequired
}

