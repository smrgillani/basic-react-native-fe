import React, { useState } from 'react';
import { StyleSheet, CheckBox, Image, Picker, Text, View, Button, TextInput, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SchedulerScreen extends React.Component {
  

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>

        <Text style={[styles.headerText,{marginTop:15}]}>Schedule Type</Text>

          <View style={styles.buttonRow}>
            
            <View style={styles.ButtonLeft}>
              <TouchableHighlight style={styles.centerlizedView} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="camera" size={30} color="#fff" />
                  <Text style={styles.buttonText}>Photo / {"\n"} Video Shot</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonRight}>
              <TouchableHighlight style={styles.centerlizedView} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="address-card" size={30} color="#fff" />
                  <Text style={styles.buttonText}>Product {"\n"} Training</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>

        <View style={styles.innerContainer}>

          <View style={styles.elementsContainer, {flexDirection:'row', marginTop: '4%'}}>
              <Text style={styles.headerText, {color:'#000', fontWeight:'bold', flex:1, alignItems: 'flex-start', marginLeft:15}}>Schedule Type</Text>
              <Icon style={styles.buttonIcon, {flex:0.06, alignItems: 'flex-end', marginRight:15}} name="calendar-alt" size={20} color="#d91e77" />
          </View>

          <View style={styles.elementsContainer, {flexDirection:'row', marginTop: '3%', marginBottom: '3%'}}>
            
            <View style={{width:'15%'}}>
              <Text style={styles.calendarMonthDay}>Jul</Text>
              <Text style={styles.calendarDate}>08</Text>
              <Text style={styles.calendarMonthDay}>WED</Text>
            </View>

            <View style={{width:'15%'}}>
              <Text style={styles.calendarMonthDay}>Jul</Text>
              <Text style={styles.calendarDate}>09</Text>
              <Text style={styles.calendarMonthDay}>THU</Text>
            </View>

            <View style={{width:'15%', backgroundColor: '#E21F7C'}}>
              <Text style={[styles.calendarMonthDay, {color: 'lightgray'}]}>Jul</Text>
              <Text style={[styles.calendarDate, { color : '#fff'}]}>10</Text>
              <Text style={[styles.calendarMonthDay, {color: 'lightgray'}]}>FRI</Text>
            </View>

            <View style={{width:'15%'}}>
              <Text style={styles.calendarMonthDay}>Jul</Text>
              <Text style={styles.calendarDate}>11</Text>
              <Text style={styles.calendarMonthDay}>SAT</Text>
            </View>

            <View style={{width:'15%'}}>
              <Text style={styles.calendarMonthDay}>Jul</Text>
              <Text style={styles.calendarDate}>12</Text>
              <Text style={styles.calendarMonthDay}>SUN</Text>
            </View>

            <View style={{width:'15%'}}>
              <Text style={styles.calendarMonthDay}>Jul</Text>
              <Text style={styles.calendarDate}>13</Text>
              <Text style={styles.calendarMonthDay}>MON</Text>
            </View>

          </View>

        </View>


        <View style={[styles.innerContainer,{paddingBottom:'5%', marginTop:'5%'}]}>

          <View style={styles.elementsContainer, {flexDirection:'row', marginTop: '4%', marginBottom:'3%'}}>
              <Text style={styles.headerText,styles.headerTextExtra}>Select Time</Text>
          </View>

          <View style={styles.elementsContainer,styles.elementsContainerExtra}>
            
            <View style={[styles.timeTabs,{marginRight:'2%', backgroundColor: '#E21F7C'}]}>
              <Text style={[styles.timeTabsText,{color:'#fff'}]}>9:00 - 10:00</Text>
            </View>

            <View style={[styles.timeTabs,{marginLeft:'2%'}]}>
              <Text style={styles.timeTabsText}>11:30 - 12:30</Text>
            </View>
          
          </View>


          <View style={styles.elementsContainer,styles.elementsContainerExtra}>
            
            <View style={[styles.timeTabs,{marginRight:'2%'}]}>
              <Text style={[styles.timeTabsText]}>2:00 - 3:00</Text>
            </View>

            <View style={[styles.timeTabs,{marginLeft:'2%'}]}>
              <Text style={styles.timeTabsText}>3:30 - 4:30</Text>
            </View>
          
          </View>


          <View style={styles.elementsContainer,styles.elementsContainerExtra}>
            
            <View style={[styles.timeTabs,{marginRight:'2%', backgroundColor: 'lightgray', borderColor:'lightgray'}]}>
              <Text style={[styles.timeTabsText]}>2:00 - 3:00</Text>
            </View>

            <View style={[styles.timeTabs,{marginLeft:'2%'}]}>
              <Text style={styles.timeTabsText}>3:30 - 4:30</Text>
            </View>
          
          </View>

        </View>


        <TouchableHighlight style={styles.touchAble} onPress={()=>this.props.navigation.navigate('SuccessMessage', {  
            messageToShow: 'Successfully Scheduled'  
        })} underlayColor={'#000'}>
            <Text style={styles.loginText}>Schedule Now</Text>
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
    marginLeft:20,
    marginRight:20,
  },
  headerText: {
    color: '#fff',
    marginBottom : '5%',
    alignItems: 'center',
    fontSize: 15,
    fontWeight : 'bold',
    justifyContent: 'center',
  },
  elementsContainer: {
    width:'85%',
    marginTop: '4%',
    marginBottom: '3%'
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
    width:130,
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
    borderColor: "#fff",
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
    borderColor: "#fff",
    borderRadius:10,
    marginTop:10,
    marginLeft: 10,
    marginRight: 20,
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
  calendarMonthDay: {
    fontSize:10,
    marginBottom:5,
    color:'darkgray',
    textAlign: 'center',
  },
  calendarDate: {
    fontSize:25,
    color:'#000',
    textAlign: 'center',
  },
  timeTabs: {
    width: '50%',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
    borderColor: "#E21F7C",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTabsText: {
    paddingBottom: 7,
    paddingTop: 7,
  },
  elementsContainerExtra: {
    flexDirection:'row', 
    marginTop:'3%', 
    marginBottom:'3%', 
    marginLeft:'7%', 
    marginRight:'7%'
  },
  headerTextExtra: {
    color:'#000',
    fontWeight:'bold',
    flex:1,
    alignItems:'flex-start',
    marginLeft:15
  }
});

export default SchedulerScreen;