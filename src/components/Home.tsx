import React from 'react'
import { Text, View, Image, SafeAreaView, StatusBar, TouchableNativeFeedback, Platform } from 'react-native';
import styles from '../styles/Home.style'
import { Cards } from './Cards';
import BottomNavBar from './BottomNavBar';
import { useNavigation } from '@react-navigation/native';

function Home() {

  const navigation = useNavigation()
  if (Platform.OS === 'ios') {
    return (

      <SafeAreaView style={{ backgroundColor: 'black' }}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.homeContainer} >

          <View style={styles.homeHeader}>
            <Text style={styles.homeHeaderText}>Good Morning!</Text>
            <Text style={styles.homeHeaderText}>Mario</Text>
          </View>
          <View style={styles.containerAddCityIcon}>
            <View style={styles.addCityIcon}>
              <Image source={require('../assets/icons/Plus.png')} />
            </View>
            <View style={styles.containerTextAddCity} >
              <Text style={styles.textAddCity}>Aggiungi Città</Text>
            </View>
          </View>

          <View style={styles.homeCards}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Bridge', { itemId: 86, lat: '45.07305371264943', lon: '7.7034048934817385', city: 'Turin' })}>
              <View>
                <Cards city={'Turin'} lat={'45.07305371264943'} lon={'7.703404893481738'} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Bridge', { itemId: 85, lat: '51.50823978626847', lon: '-0.1278276931079049', city: 'London' })}>
              <View><Cards city={'London'} lat={'51.50823978626847'} lon={'-0.1278276931079049'} />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Bridge', { itemId: 84, lat: '41.90246187772918', lon: '12.494985154938323', city: 'Rome' })}>
              <View><Cards city={'Rome'} lat={'41.90246187772918'} lon={'12.494985154938323'} />
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.homeNavigationBarContainer}>
            <BottomNavBar />
          </View>


        </View>
      </SafeAreaView>
    )
  }
  else {

    return (
      <SafeAreaView>
      <View>
        <View style={styles.homeHeader}>
          <Text style={styles.homeHeaderText}>Good Morning!</Text>
          <Text style={styles.homeHeaderText}>Mario</Text>
        </View>
        <View style={styles.containerAddCityIcon}>
          <View style={styles.addCityIcon}>
            <Image source={require('../assets/icons/Plus.png')} />
          </View>
          <View style={styles.containerTextAddCity}>
            <Text style={styles.textAddCity}>Aggiungi Città</Text>
          </View>
        </View>

        <View style={styles.homeCardsContainer}>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate('Bridge', {
                itemId: 86,
                lat: '45.07305371264943',
                lon: '7.7034048934817385',
                city: 'Turin',
              })
            }>
            <View>
              <Cards
                city={'Turin'}
                lat={'45.07305371264943'}
                lon={'7.703404893481738'}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate('Bridge', {
                itemId: 85,
                lat: '51.50823978626847',
                lon: '-0.1278276931079049',
                city: 'London',
              })
            }>
            <View>
              <Cards
                city={'London'}
                lat={'51.50823978626847'}
                lon={'-0.1278276931079049'}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate('Bridge', {
                itemId: 84,
                lat: '41.90246187772918',
                lon: '12.494985154938323',
                city: 'Rome',
              })
            }>
            <View>
              <Cards
                city={'Rome'}
                lat={'41.90246187772918'}
                lon={'12.494985154938323'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.homeNavigationBarContainer}>
          <BottomNavBar />
        </View>
      </View>
      </SafeAreaView>
    );

  }

}


  

export default Home