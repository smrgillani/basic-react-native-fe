import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component {
  render() {
    const { logo, paraTextOne, paraTextTwo, paraRegards, left, scale, height, width, title, amount, updated } = this.props;
    const containerStyles = {
      ...styles.container,
      backgroundColor: '#fff',
      marginHorizontal: 5,
      height,
      width,
      transform: [{scale}]
    };
    const logoStyles = {...styles.logo, transform: [{scale}]};
    const titleStyles = {...styles.title, transform: [{scale}]};
    const paraStyles = {...styles.para, transform: [{scale}]};
    const amountStyles = {...styles.amount, transform: [{scale}]};
    const updatedStyles = {...styles.updated, transform: [{scale}]};
    return (
      <Animated.View style={containerStyles}>
        <Animated.View style={styles.logoContainer}>
          <Animated.Text style={titleStyles}>{title.toUpperCase()}</Animated.Text>
        </Animated.View>
        <Animated.Text style={paraStyles}>{paraTextOne}</Animated.Text>
        <Animated.Text style={paraStyles}>{paraTextTwo}</Animated.Text>
        <Animated.Text style={paraStyles}>{paraRegards}</Animated.Text>
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    borderRadius: 5,
    borderColor: 'transparent',
    padding: 15
  },
  logoContainer: {
    width: '100%',
    alignItems: 'flex-start'
  },
  logo: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight : 'bold',
    marginTop: '5%'
  },
  para: {
    color: '#000',
    fontSize: 13,
    marginTop: '5%'
  },
  amount: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '1%'
  },
  updated: {
    color: '#fff',
    fontSize: 8,
    marginTop: '14%'
  }
};