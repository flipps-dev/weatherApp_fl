import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    bottomNavBarContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 78,
        width: 374,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
            
    },

    /*bottomNavBarButton: {
        height: 78,
        padding: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#01175F',
    },*/

})