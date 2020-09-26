import React, { useState } from 'react';
import { StyleSheet, Image, Picker, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class RegisterMerchantStepOneScreen extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Contact Person</Text>


          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Name" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Position" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Email ID" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Mobile Number" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.imageContainer}>
                  <Image source={require('../assets/dot2.png')} style={styles.headerImage} />
          </View>

        </View>

        <TouchableHighlight style={styles.touchAble} onPress={()=>this.props.navigation.navigate('SuccessMessage', {  
            messageToShow: 'Registration Successfully!'  
        })} underlayColor={'#000'}>
            <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
      
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
    marginTop : '10%',
    marginBottom : '5%',
    alignItems: 'center',
    fontSize: 15,
    fontWeight : 'bold',
    justifyContent: 'center',
  },
  elementsContainer: {
    width:'85%',
    marginTop: '4%',
    marginBottom: '3%',
    borderBottomWidth : 1,
  },
  customPicker:{
    alignSelf: 'stretch',
  },
  customTextInput:{
    height: 40,
  },
  touchAble :{
    height: 40,
    width:100,
    borderRadius:25,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor: "#fff",
    marginTop :30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: "#fff",
    textAlign: 'center',
  },
  headerImage: {
    height:21,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  imageContainer: {
    marginTop: '8%',
    marginBottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default RegisterMerchantStepOneScreen;