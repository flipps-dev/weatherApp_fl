import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({

    weeklyCardsContainer: {
        marginHorizontal:20, 
        marginVertical:50,
    },

    weeklyWeatherCard:{
        width:148,
        height:232,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius: 20,
        marginLeft:10,
        alignItems:'center'
    },

    dayText:{
        height: 31,
        width: 150,
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: Platform.OS===('ios') ? "600" : 'bold',
        textAlign: 'center',
        marginTop:20
    },

    gradeText:{
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 36,
        fontWeight: Platform.OS===('ios') ? "600" : 'bold',
        textAlign: 'center',
        marginTop:20
    },

    weeklyWeatherCardIcon: {
        marginTop:10
    }

})