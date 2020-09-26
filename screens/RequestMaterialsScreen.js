import React, { useState } from 'react';
import { StyleSheet, Image, Picker, Text, View, Button, TextInput, TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class RequestMaterialsScreen extends React.Component {
  

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>

      <Text style={[styles.headerText,styles.headerTextExtra]}> Select Marketing Collateral </Text>

          <View style={styles.buttonRow}>
            
            <View style={styles.ButtonLeft}>
              <TouchableHighlight style={styles.centerlizedView} underlayColor={'lightgray'}>
                <View>
                  <Text style={[styles.buttonText,{color:'#000'}]}>Standee</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonCenter}>
              <TouchableHighlight style={styles.centerlizedView} underlayColor={'lightgray'}>
                <View>
                  <Text style={[styles.buttonText,{color:'#000'}]}>Sticker</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonRight}>
              <TouchableHighlight style={styles.centerlizedView} underlayColor={'lightgray'}>
                <View>
                  <Text style={styles.buttonText}>Poster</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>

        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Delivery Details</Text>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Company Name" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Full Address" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Email ID" placeholderTextColor="black" editable />
          
          </View>

          <View style={[styles.elementsContainer,{marginBottom:'15%'}]}>
          
              <TextInput style={styles.customTextInput} placeholder="Mobile Number" placeholderTextColor="black" editable />
          
          </View>

        </View>

        <TouchableHighlight style={styles.touchAble} onPress={()=>this.props.navigation.navigate('SuccessMessage', {  
            messageToShow: 'Successfully Sent'  
        })} underlayColor={'#000'}>
            <Text style={styles.loginText}>Send Now</Text>
        </TouchableHighlight>
      
      </View>
      </ScrollView>
      </SafeAreaView>
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
    marginLeft:'5%',
    marginRight:'5%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#000',
    marginTop : '15%',
    marginBottom : '5%',
    alignItems: 'center',
    fontSize: 15,
    fontWeight : 'bold',
    justifyContent: 'center',
  },
  headerTextExtra: {
    color:'#fff',
    fontSize:17,
    marginTop:15
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
    marginBottom :30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerlizedView: {
    paddingTop: 10,
    borderRadius:10,
    paddingBottom: 10,
    alignSelf: 'stretch'
  },
  ButtonLeft :{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    backgroundColor:'#fff',
    borderColor: "#fff",
    borderRadius:10,
    marginLeft: 20,
    paddingTop:25,
    paddingBottom:25,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ButtonCenter :{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    backgroundColor:'#fff',
    borderColor: "#fff",
    borderRadius:10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop:25,
    paddingBottom:25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonRight :{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor: "#fff",
    borderRadius:10,
    marginRight: 20,
    paddingTop:25,
    paddingBottom:25,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonIcon: {
    textAlign: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center',
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

export default RequestMaterialsScreen;