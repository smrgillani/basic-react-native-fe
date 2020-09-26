import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class RegisterMerchantFirstStepScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Services Offered</Text>

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
    borderRadius:25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 15,
    fontWeight : 'bold',
    marginBottom : 10,
    justifyContent: 'center',
  },
  loginText: {
    color: "#fff",
    textAlign: 'center',
  },
  buttonRow: {
    width: '100%',
    marginTop: 15,
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

export default RegisterMerchantFirstStepScreen;