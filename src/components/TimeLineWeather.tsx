import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/TimeLineWeather.style'
import convert from '../tools/converter'
import request from '../api/Request';
import LinearGradient from 'react-native-linear-gradient';


interface Props {
    lat: string,
    lon: string,
}

interface State {
    lat: string,
    lon: string,
    hour1: string,
    hour2: string,
    hour3: string,
    hour4: string,
    hour5: string,
    tempNow: number,
    temp1: number,
    temp2: number,
    temp3: number,
    temp4: number,
    temp5: number,
}

export class TimeLineWeather extends Component<Props,State>{

    constructor(props: Props){
        super(props);
        this.state =
        {
            lat: this.props.lat,
            lon: this.props.lon,
            hour1:"0",
            hour2:"0",
            hour3:"0",
            hour4:"0",
            hour5:"0",
            tempNow:0,
            temp1:0,
            temp2:0,
            temp3:0,
            temp4:0,
            temp5:0,
        }
    }
    

    componentDidMount(){
        this.apiResponse()
    }

    apiResponse = async ()=> {
     
     await request.fetchWeather(this.state.lat, this.state.lon)
     this.setState({hour1:convert.hourForecast(request.var.hour1) }) 
     this.setState({hour2:convert.hourForecast(request.var.hour2) }) 
     this.setState({hour3:convert.hourForecast(request.var.hour3) }) 
     this.setState({hour4:convert.hourForecast(request.var.hour4) }) 
     this.setState({hour5:convert.hourForecast(request.var.hour5) }) 
     
     const gradeCelsius = convert.kelvinToCelsius(request.var.grade)
     this.setState({tempNow:gradeCelsius})
     this.setState({temp1:convert.kelvinToCelsius(request.var.temp1 ) }) 
     this.setState({temp2:convert.kelvinToCelsius(request.var.temp2) }) 
     this.setState({temp3:convert.kelvinToCelsius(request.var.temp3) }) 
     this.setState({temp4:convert.kelvinToCelsius(request.var.temp4) }) 
     this.setState({temp5:convert.kelvinToCelsius(request.var.temp5) }) 

     
    
    }

    render() {
        return (

            <View style={{ justifyContent: 'center', backgroundColor: 'transparent', marginLeft: 20, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>


                    <View style={{ marginTop: 415, zIndex: 1 }}>
                        <View style={styles.dotInfoView}><Text style={styles.nowText}>Now</Text>
                            <View style={styles.dot}></View>
                            <Text style={styles.nowGrade}>{this.state.tempNow}°</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 427, flexDirection: 'row', zIndex: 1, }}>
                        <View style={styles.dotInfoView}><Text style={styles.textHour}>{this.state.hour1}</Text><View style={styles.hourDot}></View><Text style={styles.textGrade}>{this.state.temp1}°</Text></View>
                        <View style={styles.dotInfoView}><Text style={styles.textHour}>{this.state.hour2}</Text><View style={styles.hourDot}></View><Text style={styles.textGrade}>{this.state.temp2}°</Text></View>
                        <View style={styles.dotInfoView}><Text style={styles.textHour}>{this.state.hour3}</Text><View style={styles.hourDot}></View><Text style={styles.textGrade}>{this.state.temp3}°</Text></View>
                        <View style={styles.dotInfoView}><Text style={styles.textHour}>{this.state.hour4}</Text><View style={styles.hourDot}></View><Text style={styles.textGrade}>{this.state.temp4}°</Text></View>
                        <View style={styles.dotInfoView}><Text style={styles.textHour}>{this.state.hour5}</Text><View style={styles.hourDot}></View><Text style={styles.textGrade}>{this.state.temp5}°</Text></View>
                    </View>

                    <LinearGradient style={styles.line} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.1)']} ><View></View></LinearGradient>

                </View>

            </View>
        )
    }
    
}
