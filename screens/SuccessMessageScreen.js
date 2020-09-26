import React, { useState } from 'react';
import { StyleSheet, Image, Picker, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SuccessMessageScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>

          <Icon style={{marginTop:'19%'}} name="check-circle" size={80} color="#3dce98" />

          <Text style={styles.headerText}>{this.props.route.params.messageToShow}</Text>

        </View>

        <Icon style={{marginTop:'9%'}} onPress={()=>this.props.navigation.navigate('Home')} name="home" size={30} color="#fff" />
      
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
    backgroundColor: '#fff',
    borderRadius:25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#000',
    marginTop : '3%',
    marginBottom : '25%',
    alignItems: 'center',
    fontSize: 15,
    fontWeight : 'bold',
    justifyContent: 'center',
  }
});

export default SuccessMessageScreen;