import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    line:{
        width: Dimensions.get('window').width,
        height:5,
        marginTop: 450,   
        alignItems:'center',
        position:'absolute',
        marginLeft:50,  
        zIndex:0,
        
    },

    dot:{
        width: 25,
        height: 25,
        borderRadius:30,
        backgroundColor:'white',
        zIndex:1      
    },

    hourDot:{
        width: 15,
        height: 15,
        borderRadius:30,
        backgroundColor:'white',
        zIndex:1,
        position:'absolute',
        marginTop:17
        
        
    },

    textHour:{
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 12,
        textAlign: 'center',
        marginVertical: -8,
    },

    textGrade:{
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40, 
    },

    dotInfoView:{
        zIndex:1, 
        marginLeft:30, 
        alignItems:'center',
    },

    nowGrade:{
        height: 35,
        width: 45,
        color:'white',
        fontFamily: 'Poppins',
        fontSize: 25,
        fontWeight: "bold",
        textAlign:'center'
    },

    nowText:{
        height: 25,
        width: 50,
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: "bold",
        textAlign:'center'
    }
})