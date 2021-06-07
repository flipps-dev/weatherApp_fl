import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsPage } from './DetailsPage';

type RootStackParamList = {
    DetailsPage: 
    { 
        lat: string,
        lon:string,
        city: string,
        grade: number 
    };
  };

const RootStack = createStackNavigator<RootStackParamList>();


type InfoPageProp = RouteProp<RootStackParamList, 'DetailsPage'>;

type InfoPageNavigation = RouteProp<RootStackParamList, 'DetailsPage'>;

type Props = {
    route: InfoPageProp;
    navigation: InfoPageNavigation
  };

function Bridge({ route, navigation }: Props){
    return(
        <View style={{flex:1}}>
        <DetailsPage lat={route.params.lat} lon={route.params.lon} city={route.params.city} grade={route.params.grade}/>
        </View>
    )
}

export default Bridge