import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerCards:{
        height: 140,
        width: 374,
        borderRadius: 25,
        backgroundColor: 'red',
        marginHorizontal:20,
        marginTop: 15,
        flexDirection:'row',
    },

    textCity:{
        height: 36,
        width: 98,
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 26,
        marginLeft:40,
        marginTop:20
    },

    textDate:{
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 15,
        marginLeft: 40,
        letterSpacing:0
    },

    textHour:{
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: "300",
        letterSpacing: 0,
        marginTop:8,
        marginLeft: 40
    },

    icon:{
        alignItems:'center', 
        marginTop:30, 
        marginLeft:20
    },

    textGrade:{
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop:30,
        marginLeft: 20
    }
    
})