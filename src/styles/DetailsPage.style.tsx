import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    topView: {
        display: 'flex',
        flexDirection: 'row'
    },

    backHomeContainer: {
        marginTop: -50,
    },

    header: {
        flexDirection: 'row',
        marginTop: -35,
        height: 45,
        marginLeft: 110
    },

    headerPlusIcon: {
        marginTop: 10, 
        marginLeft: Platform.OS === ('ios') ? 70 : 60
    },
    

    currentWeather: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Platform.OS === ('ios') ? 20 : 10,
    },

    cityName: {
        height: 45,
        width: 200,
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 32,
        fontWeight: Platform.OS === ('ios') ? "600" : 'bold',
        textAlign: 'center',
        zIndex: 0
    },

    dateText: {
        color: 'white',
        marginTop: Platform.OS === ('ios') ? 30 : 10,
        textAlign: 'center',
        height: 30,
        width: 300,
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 70
    },

    weatherDescription: {
        color: 'white',
        textAlign: 'center',
        marginTop: Platform.OS === ('ios') ? 30 : 10,
        height: 28,
        width: 60,
        fontFamily: 'Poppins',
        fontSize: 20,
        marginHorizontal: 195
    },

    temperatureText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 110,
        fontWeight: 'bold',
        marginRight: 20
    },

    currentWeatherIcon: {
        marginLeft: 100, 
        marginTop: 45
    },

    timeLineSection: {
        marginTop: Platform.OS === ('ios') ? -390 : -370, 
        marginLeft: Platform.OS === ('ios') ? 0 : -10
    },

    weeklyWeatherSection: {
        marginTop: -30,
    },

    navigationBarSection: {
        alignItems: 'center', 
        marginTop: Platform.OS === ('ios') ? 0 : -20
    },
    
});