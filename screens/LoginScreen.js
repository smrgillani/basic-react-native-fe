import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Sales Login</Text>
          
          <TextInput style={styles.textInput} editable />
          <TextInput style={styles.textInput} editable />

          <TouchableHighlight style={styles.touchAble} onPress={()=>this.props.navigation.navigate('Home')} underlayColor={'#E21F7C'}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    margin: 40,
    padding: 30,
    borderRadius:25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  headerText: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 23,
    marginBottom : 10,
    justifyContent: 'center',
  },
  textInput: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    height:35,
    alignSelf: 'stretch',
    borderRadius:25,
    paddingHorizontal: 10,
    marginBottom : 10,
  },
  touchAble :{
    height: 40,
    width:100,
    borderRadius:25,
    backgroundColor : "#E21F7C",
    marginLeft :50,
    marginRight:50,
    marginTop :10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: "#fff",
    textAlign: 'center',
  },
});

export default LoginScreen;