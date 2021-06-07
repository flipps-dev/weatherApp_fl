import { StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    homeContainer: {
        flex: 1,
      },
    
      homeHeader: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50,
        height: 78,
        width: 215,
        marginHorizontal: 100
      },
    
      homeHeaderText: {
        color: '#01175F',
        fontFamily: 'Poppins-Regular',
        fontSize: 28,
        fontWeight: Platform.OS === ('ios') ? "600" : 'bold',
        textAlign: 'center'
      },
    
      containerAddCityIcon: {
        width: 374,
        height: 64,
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 60 : 30,
        flex: 1
      },
    
      containerTextAddCity: {
        height: 28,
        width: 150,
        marginLeft: 133,
        marginRight: 97,
        marginVertical: 0
      },
    
      textAddCity: {
        color: '#01175F',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: Platform.OS === ('ios') ? "600" : 'bold',
      },
    
      addCityIcon: {
        marginLeft: 94,
        marginRight: 256
      },
    
      homeCards: {
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'space-between',
        elevation: 5,
      },
    
      homeCardsContainer: {
        elevation: 5,
        marginVertical: 30,
      },

      homeNavigationBarContainer: {
        marginHorizontal: 20, 
        marginTop: 30
      }
    
    
    })