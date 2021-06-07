import React from 'react';
import { View, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/BottomNavBar.style'


 function BottomNavBar() {
    const navigation = useNavigation(); 
    
        return(
            <View style={styles.bottomNavBarContainer}>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/Home.png')} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Image source={require('../assets/icons/Search.png')} />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Image source={require('../assets/icons/Location.png')} />
                </TouchableWithoutFeedback>

            </View>
        )
    
}


export default BottomNavBar