import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class MRHeaderComponent extends React.Component {
    render() {
      return (
        <View style = {styles.headerContainer}>
          
          <View style={styles.headerLeft}>
            <Text><Icon name="chevron-left" onPress={()=>this.props.navigation.goBack(null)} size={30} color="#fff" /></Text>
          </View>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}> {this.props.customHeaderTitle} </Text>
          </View>

          <View style={styles.headerRight}>
            <Text><Icon name="home" onPress={()=>this.props.navigation.navigate('Home')} size={30} color="#fff" /></Text>
          </View>

        </View>
      );
    }
  }

const styles = StyleSheet.create({
  
  headerContainer: {
    backgroundColor: '#000',
    paddingTop:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerLeft: {
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerCenter: {
    paddingTop:10,
    paddingBottom:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    flex: 0.6,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight : 'bold',
    textAlign: 'center',
  },
});

export default MRHeaderComponent;