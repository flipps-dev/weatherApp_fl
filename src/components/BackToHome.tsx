import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/BackToHome.style'

function backHome() {
    const navigation = useNavigation()
    return (
        <View style={styles.containerBackHome}>
            <TouchableNativeFeedback style={styles.backHomeButton} onPress={()=> navigation.navigate('Home')}>
                        
                        <Image style={styles.backHomeIcon} source={require('../assets/icons/arrow.png')}/>
                    
                    </TouchableNativeFeedback>
        </View>
    )
}

export default backHome