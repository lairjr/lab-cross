import {
  AlertIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import React from 'react';

const LoginView = ({ username }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Planned Game
        </Text>
        <TextInput
          placeholder={ 'Username' }
          style={styles.textInput} />
        <TextInput
          placeholder={ 'Password' }
          style={styles.textInput}
          secureTextEntry={ true } />
        <TouchableHighlight
          onPress={showAlert}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>
      </View>
    );
};

const showAlert = () => {
  AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}] )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'gray'
  },
  button: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3991da',
    overflow: 'hidden',
    height: 40,
    paddingTop: 6,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#8babc6',
    width: 100
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = ({ login }) => {
    return login;
};

export default connect(mapStateToProps)(LoginView);
