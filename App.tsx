/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import React, { Component } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   useColorScheme,
   View,
   StyleSheet,
 } from 'react-native';
 import HomeScreen from './src/components/Home';
 import {TimeLineWeather} from './src/components/TimeLineWeather';
 import { DetailsPage } from './src/components/DetailsPage';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import {WeeklyWeather} from './src/components/WeeklyWeather'
 
 import Bridge from './src/components/Bridge'

 const Stack = createStackNavigator();

 const App = () => {
   return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TimeLine" component={TimeLineWeather} />
      <Stack.Screen name="DetailsPage" component={DetailsPage} />
      <Stack.Screen name="WeeklyWeather" component={WeeklyWeather} />
      <Stack.Screen name="Bridge" component={Bridge} />

    </Stack.Navigator>

  </NavigationContainer>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
 });

 export default App;
