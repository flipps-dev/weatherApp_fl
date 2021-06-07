import React from 'react'
import { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/Cards.style'
import request from '../api/Request.js'
import LinearGradient from 'react-native-linear-gradient';
import convert from '../tools/converter'


export class Cards extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = 
        { 
            city: this.props.city,
            lat: this.props.lat,
            lon: this.props.lon,
            icon: require('../assets/icons/Cloudy.png'),
            date: '',
            hour: '',
            description: '',
            grade: '',
            colorOne: '#000000',
            colorTwo: '#787272',
        };
    }

    componentDidMount(){
        this.apiResponse()
    }

    apiResponse = async ()=> {
     
     await request.fetchWeather(this.state.lat, this.state.lon) 
     const timestamp = convert.timestampDate(request.var.timestamp).split(",").join(",\n")
     this.setState({date:timestamp }) 
     const hourts = convert.timestaptoHours(request.var.timestamp)
     this.setState({hour:hourts })
     let weatherCondition = request.var.description
     this.setState({description: weatherCondition})
     const gradeCelsius = convert.kelvinToCelsius(request.var.grade)
     this.setState({grade:gradeCelsius})
     this.setConditions()
    
    }


    setConditions(){
        if(this.state.description=='Clouds' || this.state.description=='Fog' ){
            this.setState({icon: require('../assets/icons/Cloudy.png')})
            this.setState({colorOne: '#464C64'})
            this.setState({colorTwo:'#99A9B9'})
        } else if(this.state.description=='Clear'){
            this.setState({icon: require('../assets/icons/Sunny.png')})
            this.setState({colorOne: '#5374E7'})
            this.setState({colorTwo:'#77B9F5'})
        } else if(this.state.description=='Rain'){
            this.setState({icon: require('../assets/icons/ModRainSwrsDay.png')})
            this.setState({colorOne: '#011354'})
            this.setState({colorTwo:'#5B9FE3'})
        }
    }

    

    render(){  
        return(


            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[this.state.colorOne, this.state.colorTwo]} style={styles.containerCards}>
               
               <View>
                    <View><Text style={styles.textCity}>{this.state.city}</Text></View> 
                    <View><Text style={styles.textDate}>{this.state.date}</Text></View>
                    <View><Text style={styles.textHour}>{this.state.hour}</Text></View>
               </View>

               <View>
                    <Image style={styles.icon} source={this.state.icon}/>
               </View>

               <View>
                    <Text style={styles.textGrade}>{this.state.grade}°</Text>
               </View>
               
            </LinearGradient>

            
        )
    }

}
    