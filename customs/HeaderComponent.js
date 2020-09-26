import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
class HeaderComponent extends React.Component {

  render() {
      return (
        <View style = {styles.headerContainer}>
          
          <View style={styles.headerLeft}>
            <Text><Icon name="home" size={30} color="#fff" /></Text>
          </View>

          <View style={styles.headerCenter}>
            <Image source={require('../assets/DLogo.png')} style={styles.headerImage} />
          </View>

          <View style={styles.headerRight}>
            <Text><Icon name="sign-out-alt" size={30} onPress={()=>this.props.navigation.goBack(null)} color="#fff" /></Text>
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
    padding:10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerCenter: {
    padding:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    padding:10,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerImage: {
    height:30,
    resizeMode: 'contain'
  }
});

export default HeaderComponent;