import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderComponent from './customs/HeaderComponent';
import MRHeaderComponent from './customs/MRHeaderComponent';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterMerchantFirstStepScreen from './screens/RegisterMerchantFirstStepScreen';
import RegisterMerchantSecondStepScreen from './screens/RegisterMerchantSecondStepScreen';
import RegisterMerchantLastStepScreen from './screens/RegisterMerchantLastStepScreen';
import SuccessMessageScreen from './screens/SuccessMessageScreen';
import SendProposalScreen from './screens/SendProposalScreen';
import SchedulerScreen from './screens/SchedulerScreen';
import RequestMaterialsScreen from './screens/RequestMaterialsScreen';

const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              options={{headerShown:false}}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Home"
              options={({ navigation, route }) => ({
                header: props => <HeaderComponent {...props}/>,
              })}
              component={HomeScreen}
            />
            <Stack.Screen
              name="RegisterMerchantFirstStep"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Register Merchant" {...props} />,
              })}
              component={RegisterMerchantFirstStepScreen}
            />
            <Stack.Screen
              name="RegisterMerchantSecondStep"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Register Merchant" {...props} />,
              })}
              component={RegisterMerchantSecondStepScreen}
            />
            <Stack.Screen
              name="RegisterMerchantLastStep"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Register Merchant" {...props} />,
              })}
              component={RegisterMerchantLastStepScreen}
            />
            <Stack.Screen
              name="SuccessMessage"
              options={{headerShown:false}}
              component={SuccessMessageScreen}
            />
            <Stack.Screen
              name="SendProposal"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Send Proposal" {...props} />,
              })}
              component={SendProposalScreen}
            />
            <Stack.Screen
              name="Scheduler"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Scheduler" {...props} />,
              })}
              component={SchedulerScreen}
            />
            <Stack.Screen
              name="RequestMaterials"
              options={({ navigation, route }) => ({
                header: props => <MRHeaderComponent customHeaderTitle="Request Materials" {...props} />,
              })}
              component={RequestMaterialsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

export default App;