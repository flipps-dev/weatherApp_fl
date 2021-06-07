import React from 'react'
import { Component } from 'react';
import {Text, View, Image, Dimensions, ScrollView, Platform} from 'react-native';
import styles from '../styles/WeeklyWeather.style'
import convert from '../tools/converter'
import request from '../api/Request';


export class WeeklyWeather extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = 
        { 
            lat: this.props.lat,
            lon: this.props.lon,
            d1: '',
            d2: '',
            d3: '',
            d4: '',
            d5: '',
            dt1: '',
            dt2: '',
            dt3: '',
            dt4: '',
            dt5: '',
            descd1: '',
            descd2: '',
            descd3: '',
            descd4: '',
            descd5: '',
            icon1: require('../assets/icons/cloudyday.png'),
            icon2: require('../assets/icons/cloudyday.png'),
            icon3: require('../assets/icons/cloudyday.png'),
            icon4: require('../assets/icons/cloudyday.png'),
            icon5: require('../assets/icons/cloudyday.png'),
        };
    }

    state={
    lat:this.props.lat,
    lon:this.props.lon,
    d1:'',
    d2:'',
    d3:'',
    d4:'',
    d5:'',
    dt1:'',
    dt2:'',
    dt3:'',
    dt4:'',
    dt5:'',
    descd1:'',
    descd2:'',
    descd3:'',
    descd4:'',
    descd5:'',
    icon1:require('../assets/icons/cloudyday.png'),
    icon2:require('../assets/icons/cloudyday.png'),
    icon3:require('../assets/icons/cloudyday.png'),
    icon4:require('../assets/icons/cloudyday.png'),
    icon5:require('../assets/icons/cloudyday.png'),
    }
    
  componentDidMount(){
        this.apiResponse()
    }

    apiResponse = async ()=> {
     
     await request.fetchWeather(this.state.lat, this.state.lon)
     this.setState({d1: convert.timestampToDay(request.var.d1)})
     this.setState({d2: convert.timestampToDay(request.var.d2)})
     this.setState({d3: convert.timestampToDay(request.var.d3)})
     this.setState({d4: convert.timestampToDay(request.var.d4)})
     this.setState({d5: convert.timestampToDay(request.var.d5)})


     this.setState({dt1: convert.kelvinToCelsius(request.var.dt1)})
     this.setState({dt2: convert.kelvinToCelsius(request.var.dt2)})
     this.setState({dt3: convert.kelvinToCelsius(request.var.dt3)})
     this.setState({dt4: convert.kelvinToCelsius(request.var.dt4)})
     this.setState({dt5: convert.kelvinToCelsius(request.var.dt5)})

     this.setState({descd1: request.var.descd1})
     this.setState({descd2: request.var.descd2})
     this.setState({descd3: request.var.descd3})
     this.setState({descd4: request.var.descd4})
     this.setState({descd5: request.var.descd5})

    this.setConditionsd1()
    this.setConditionsd2()
    this.setConditionsd3()
    this.setConditionsd4()
    this.setConditionsd5()
    }

    setConditionsd1(){
        if(this.state.descd1=='Clouds' || this.state.descd1=='Fog' ){
            this.setState({icon1: require('../assets/icons/cloudyday.png')})
        } else if(this.state.descd1=='Clear'){
            this.setState({icon1: require('../assets/icons/Sunny.png')})
        } else if(this.state.descd1=='Rain'){
            this.setState({icon1: require('../assets/icons/rain.png')})          
        }
    }

    setConditionsd2(){
        if(this.state.descd2=='Clouds' || this.state.descd2=='Fog' ){
            this.setState({icon2: require('../assets/icons/cloudyday.png')})
        } else if(this.state.descd2=='Clear'){
            this.setState({icon2: require('../assets/icons/Sunny.png')})
        } else if(this.state.descd2=='Rain'){
            this.setState({icon2: require('../assets/icons/rain.png')})          
        }
    }

    setConditionsd3(){
        if(this.state.descd3=='Clouds' || this.state.descd3=='Fog' ){
            this.setState({icon3: require('../assets/icons/cloudyday.png')})
        } else if(this.state.descd3=='Clear'){
            this.setState({icon3: require('../assets/icons/Sunny.png')})
        } else if(this.state.descd3=='Rain'){
            this.setState({icon3: require('../assets/icons/rain.png')})          
        }
    }

    setConditionsd4(){
        if(this.state.descd4=='Clouds' || this.state.descd4=='Fog' ){
            this.setState({icon4: require('../assets/icons/cloudyday.png')})
        } else if(this.state.descd4=='Clear'){
            this.setState({icon4: require('../assets/icons/Sunny.png')})
        } else if(this.state.descd4=='Rain'){
            this.setState({icon4: require('../assets/icons/rain.png')})          
        }
    }

    setConditionsd5(){
        if(this.state.descd5=='Clouds' || this.state.descd5=='Fog' ){
            this.setState({icon5: require('../assets/icons/cloudyday.png')})
        } else if(this.state.descd5=='Clear'){
            this.setState({icon5: require('../assets/icons/Sunny.png')})
        } else if(this.state.descd5=='Rain'){
            this.setState({icon5: require('../assets/icons/rain.png')})          
        }
    }


    render() {
        return (

            <ScrollView style={styles.weeklyCardsContainer} horizontal={true}>
                <View style={styles.weeklyWeatherCard}>
                    <Text style={styles.dayText}>{this.state.d1}</Text>
                    <Text style={styles.gradeText}>{this.state.dt1}°</Text>
                    <Image style={styles.weeklyWeatherCardIcon} source={this.state.icon1} />
                </View>
                <View style={styles.weeklyWeatherCard}>
                    <Text style={styles.dayText}>{this.state.d2}</Text>
                    <Text style={styles.gradeText}>{this.state.dt2}°</Text>
                    <Image style={styles.weeklyWeatherCardIcon} source={this.state.icon2} />
                </View>
                <View style={styles.weeklyWeatherCard}>
                    <Text style={styles.dayText}>{this.state.d3}</Text>
                    <Text style={styles.gradeText}>{this.state.dt3}°</Text>
                    <Image style={styles.weeklyWeatherCardIcon} source={this.state.icon3} />
                </View>
                <View style={styles.weeklyWeatherCard}>
                    <Text style={styles.dayText}>{this.state.d4}</Text>
                    <Text style={styles.gradeText}>{this.state.dt4}°</Text>
                    <Image style={styles.weeklyWeatherCardIcon} source={this.state.icon4} />
                </View>
                <View style={styles.weeklyWeatherCard}>
                    <Text style={styles.dayText}>{this.state.d5}</Text>
                    <Text style={styles.gradeText}>{this.state.dt5}°</Text>
                    <Image style={styles.weeklyWeatherCardIcon} source={this.state.icon5} />
                </View>
            </ScrollView>

        )
    }
}

