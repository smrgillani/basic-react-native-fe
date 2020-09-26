import React from 'react';
import { Animated, Dimensions , Easing, StyleSheet, Text, View, Button, TextInput, TouchableHighlight, FlatList, SafeAreaView, ScrollView, PanResponder} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../customs/Card';

const ITEM_HEIGHT = 200;
const ITEM_WIDTH = '85%';
const data = [
  {
    id: '123',
    title: 'Meeting Today at 4:00PM',
    paraTextOne : 'All sales must attent the meeting at the 4:00Pm today in the office as we have a new guidelines.',
    paraTextTwo : 'Don"t be Late Guys',
    paraRegards : 'Thank you, \n Management',
  },{
    id: '126',
    title: 'Meeting Today at 4:00PM',
    paraTextOne : 'All sales must attent the meeting at the 4:00Pm today in the office as we have a new guidelines.',
    paraTextTwo : 'Don"t be Late Guys',
    paraRegards : 'Thank you, \n Management',
  },{
    id: '125',
    title: 'Meeting Today at 4:00PM',
    paraTextOne : 'All sales must attent the meeting at the 4:00Pm today in the office as we have a new guidelines.',
    paraTextTwo : 'Don"t be Late Guys',
    paraRegards : 'Thank you, \n Management',
  }
];

class HomeScreen extends React.Component {

  constructor() {
    super();
    this.transactions = null;
    this.state = {
      activeIndex: 1,
      cardsOffset: new Animated.Value(0),
      swipe: ''
    };

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        // The accumulated gesture distance since becoming responder is
        // 50 - down low sensibility 
        this.state.cardsOffset.setValue(this.state.cardsOffset._value + gestureState.dx / 50);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // The accumulated gesture distance since becoming responder is
        this.setState({ swipe: gestureState.dx < 0 ? 'left' : 'right' })
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        //this.setState({ swipe: gestureState.dx < 0 ? 'left' : 'right' })
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.swipe !== this.state.swipe && this.state.swipe !== '')
      this.finishSwipe();
  }

  finishSwipe = () => {
    // Cards stop points, visual representation for better understanding
    const stopPoints = [Math.round(Dimensions.get('window').width * .85), 0, -(Math.round(Dimensions.get('window').width * .85))];
    // Detect direction
    let changer = this.state.swipe == 'left' ? 1 : -1;
    let animChanger = this.state.swipe == 'right' ? 1 : -1;
    // Set scroll bounderis
    let activeIndex = this.state.activeIndex + changer;
    if (activeIndex < 0)
      activeIndex = 0;
    else if (activeIndex > 2)
      activeIndex = 2;

    // Animate card
    Animated.timing(this.state.cardsOffset, {
      toValue: stopPoints[activeIndex],
      duration: 300,
      easing: Easing.linear
    }).start();
      
    // Scroll bottom transaction list
    //this.transactions.scrollToIndex({index: activeIndex});
    this.setState({ activeIndex, swipe: '' });
  }

  renderCard = (data, index) => {
    const { activeIndex } = this.state;
    const isActive = index === activeIndex;
    const scale = isActive ? 1 : 1;
    return <Card
      {...data}
      key={index}
      width={ITEM_WIDTH}
      height={ITEM_HEIGHT}
      scale={scale}
    />
  }

  render() {
    
    const { cardsOffset, activeIndex } = this.state;
    const cardsStyles = {
      ...styles.cards, 
      left: cardsOffset
    };

    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Announcements Board </Text>
        <Animated.View style={cardsStyles} {...this._panResponder.panHandlers}>
          {data.map((item, index) => this.renderCard(item, index))}
        </Animated.View>
        <View style={styles.bottomBody}>
          <View style={styles.buttonRow}>
            
            <View style={styles.ButtonLeft}>
              <TouchableHighlight style={styles.centerlizedView} onPress={()=>this.props.navigation.navigate('RegisterMerchantFirstStep')} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="box-open" size={30} color="#000" />
                  <Text style={styles.buttonText}>Register {"\n"} Merchant</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonRight}>
              <TouchableHighlight style={styles.centerlizedView} onPress={()=>this.props.navigation.navigate('SendProposal')} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="file-alt" size={30} color="#000" />
                  <Text style={styles.buttonText}>Send {"\n"} Proposal</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>
          <View style={styles.buttonRow}>
            <View style={styles.ButtonLeft}>
              <TouchableHighlight style={styles.centerlizedView} onPress={()=>this.props.navigation.navigate('Scheduler')} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="calendar-alt" size={30} color="#000" />
                  <Text style={styles.buttonText}>Scheduler {"\n"} Calender</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.ButtonRight}>
              <TouchableHighlight style={styles.centerlizedView} onPress={()=>this.props.navigation.navigate('RequestMaterials')} underlayColor={'lightgray'}>
                <View>
                  <Icon style={styles.buttonIcon} name="paper-plane" size={30} color="#000" />
                  <Text style={styles.buttonText}>Request {"\n"} Materials</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>
          <View style={styles.subButtonRow}>

            <View style={styles.subButtonLeft}>
              <TouchableHighlight style={[styles.centerlizedView, styles.subButtonLeftColor]} underlayColor={'lightgray'}>
                <View>
                  <Text style={styles.subButtonText}>Time In</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.subButtonRight}>
              <TouchableHighlight style={[styles.centerlizedView, styles.subButtonRightColor]} underlayColor={'lightgray'}>
                <View>
                  <Text style={styles.subButtonText}>Contact office</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 10
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight : 'bold',
    marginTop: '5%',
    marginBottom: '5%'
  },
  cards: {
    height: 200,
    flexDirection: 'row'
  },
  bottomBody: {
    marginTop: '5%',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  buttonRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subButtonRow: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom:'100%'
  },
  centerlizedView: {
    paddingTop: 15,
    borderRadius:10,
    paddingBottom: 15,
    alignSelf: 'stretch'
  },
  ButtonLeft :{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth : 1,
    borderTopWidth : 1,
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
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  subButtonLeft :{  
    borderRadius:10,
    marginLeft: 20,
    marginTop:10,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subButtonRight :{
    borderRadius:10,
    marginLeft: 10,
    marginTop:10,
    marginRight: 20,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonIcon: {
    textAlign: 'center',
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    textAlign: 'center',
  },
  subButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: 'center',
  },
  subButtonLeftColor: {
    backgroundColor: "#FF0000"
  },
  subButtonRightColor: {
    backgroundColor: "#000"
  },
};

export default HomeScreen;