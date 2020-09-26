import React, { useState } from 'react';
import { StyleSheet, CheckBox, Image, Picker, Text, View, Button, TextInput, TouchableHighlight,SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SendProposalScreen extends React.Component {
  

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>

          <View style={styles.buttonRow}>
            
            <View style={styles.ButtonLeft}>
              <TouchableHighlight style={[styles.centerlizedView, styles.whiteBackground]} onPress={()=>this.props.navigation.navigate('RegisterMerchantSecondStep')} underlayColor={'lightgray'}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/itreatnow.png')} style={styles.headerImage} />
                  <Text style={styles.buttonText}>ScannPay</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonRight}>
              <TouchableHighlight style={styles.centerlizedView} onPress={()=>this.props.navigation.navigate('Home')} underlayColor={'lightgray'}>
                <View style={styles.imageContainer}>
                  <Image source={require('../assets/itreatx.png')} style={styles.headerImage} />
                  <Text style={[styles.buttonText, styles.whiteTextColor]}>Membership</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>

        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Receiver Details</Text>


          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Company Name" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Email ID" placeholderTextColor="black" editable />
          
          </View>

          <View style={styles.elementsContainer}>
          
              <TextInput style={styles.customTextInput} placeholder="Mobile Number" placeholderTextColor="black" editable />
          
          </View>

          <View style={[styles.elementsContainerNB,{ flexDirection: 'row' }]}>
          
              <CheckBox checked={false} />
              <Text style={{marginTop: 7}}> Send Link To Mobile Number</Text>
          
          </View>

          <View style={[styles.elementsContainerNB,{ flexDirection: 'row', marginBottom:'5%' }]}>
          
              <CheckBox checked={true} />
              <Text style={{marginTop: 7}}> Send Link To Email Address</Text>
          
          </View>

        </View>

        <TouchableHighlight style={styles.touchAble} onPress={()=>this.props.navigation.navigate('SuccessMessage', {  
            messageToShow: 'Successfully Sent!'  
        })} underlayColor={'#000'}>
            <Text style={styles.loginText}>Submit</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#000',
    marginTop : '5%',
    marginBottom : '0%',
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
  elementsContainerNB: {
    width:'85%',
    marginTop: '4%',
    marginBottom: '3%',
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
  },
  buttonRow: {
    width: '100%',
    marginBottom: '9%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerlizedView: {
    paddingTop: 15,
    borderRadius:10,
    paddingBottom: 15,
    alignSelf: 'stretch'
  },
  ButtonLeft :{
    borderRadius:10,
    marginTop:10,
    marginLeft: 20,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ButtonRight :{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderRadius:10,
    marginTop:10,
    marginLeft: 10,
    marginRight: 20,
    borderColor: "#fff",
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  whiteBackground: {
    backgroundColor: '#fff',
  },
  buttonText: {
    marginTop: '2%',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteTextColor: {
    color: '#fff',
  },
  headerImage: {
    height:70,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SendProposalScreen;