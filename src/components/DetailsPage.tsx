import React, { Component } from 'react';
import { Text, View, Image, Platform } from 'react-native';
import styles from '../styles/DetailsPage.style'
import { TimeLineWeather } from './TimeLineWeather'
import { WeeklyWeather } from './WeeklyWeather';
import LinearGradient from 'react-native-linear-gradient';
import request from '../api/Request.js';
import convert from '../tools/converter'
import BottomNavBar from './BottomNavBar';
import BackToHome from './BackToHome';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    lat: string,
    lon: string,
    city: string,
    grade: number,
}

interface State {
    lat: string,
    lon: string,
    city: string,
    icon: any,
    date: string,
    hour: string,
    description: string,
    grade: number,
    colorOne: string,
    colorTwo: string,
}

export class DetailsPage extends Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state =
        {
            lat: this.props.lat,
            lon: this.props.lon,
            city: this.props.city,
            icon: require('../assets/icons/Cloudy.png'),
            date: '',
            hour: '',
            description: '',
            grade: this.props.grade,
            colorOne: '#000000',
            colorTwo: '#787272', 
        }
    }



    componentDidMount() {
        this.apiResponse()
    }

    apiResponse = async () => {

        await request.fetchWeather(this.state.lat, this.state.lon)
        const timestamp = convert.timestampDate(request.var.timestamp)
        this.setState({ date: timestamp })
        const hourts = convert.timestaptoHours(request.var.timestamp)
        this.setState({ hour: hourts })
        const weatherCondition = request.var.description
        this.setState({ description: weatherCondition })
        const gradeCelsius = convert.kelvinToCelsius(request.var.grade)
        this.setState({ grade: gradeCelsius })
        this.setConditions()

    }


    setConditions() {
        if (this.state.description == 'Clouds' || this.state.description == 'Fog') {
            this.setState({ icon: require('../assets/icons/Cloudy.png') })
            this.setState({ colorOne: '#464C64' })
            this.setState({ colorTwo: '#99A9B9' })
        } else if (this.state.description == 'Clear') {
            this.setState({ icon: require('../assets/icons/Sunny.png') })
            this.setState({ colorOne: '#5374E7' })
            this.setState({ colorTwo: '#77B9F5' })
        } else if (this.state.description == 'Rain') {
            this.setState({ icon: require('../assets/icons/ModRainSwrsDay.png') })
            this.setState({ colorOne: '#011354' })
            this.setState({ colorTwo: '#5B9FE3' })
        }
    }


    renderBackHome() {
        if (Platform.OS === 'ios') {
            return (
                <BackToHome />
            )
        } else {
            return (
                <View style={styles.backHomeContainer}>
                    <BackToHome />
                </View>
            )
        }
    }

    render() {
        const latProps = { 
            lat: this.props.lat}

            const lonProps = { 
                lon: this.props.lon}
        return (


            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[this.state.colorTwo, this.state.colorOne]}
                style={{ flex: 1 }}>
                    {this.renderBackHome()}

                    <View style={styles.header}>
                        <Text style={styles.cityName}> {this.state.city}</Text>
                        <Image style={styles.headerPlusIcon} source={require('../assets/icons/Plus_white.png')} />
                    </View>
                
                <Text style={styles.dateText}>{this.state.date}</Text>

                <Text style={styles.weatherDescription}>{this.state.description}</Text>

                <View style={styles.currentWeather}>
                    <Image style={styles.currentWeatherIcon} source={this.state.icon} />
                    <Text style={styles.temperatureText}>{this.state.grade}°</Text>
                </View>

                <View style={styles.timeLineSection}>
                    <ScrollView
                        horizontal={true}
                    >
                        <TimeLineWeather {...latProps} {...lonProps} />
                    </ScrollView>
                </View>

                <View style={styles.weeklyWeatherSection}>
                    <WeeklyWeather lat={this.state.lat} lon={this.state.lon} />
                </View>
                <View style={styles.navigationBarSection}><BottomNavBar /></View>
                
            </LinearGradient>
            
        )
    }

}

