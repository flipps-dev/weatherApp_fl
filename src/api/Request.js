import { openweathermap_api_key } from './openweather_api_key.json'
class Request {

  var = {
    temperature: 'loading',
    description: 'loading',
    timestamp: 'loading',
    grade: '°C',
    hnow: 'loading',
    hour1: 'loading',
    hour2: 'loading',
    hour3: 'loading',
    hour4: 'loading',
    hour5: 'loading',
    hour6: 'loading',
    hour7: 'loading',
    hour8: 'loading',
    hour9: 'loading',
    hour10: 'loading',
    tempNow: '°C',
    temp1: '°C',
    temp2: '°C',
    temp3: '°C',
    temp4: '°C',
    temp5: '°C',
    temp6: '°C',
    temp7: '°C',
    temp8: '°C',
    temp9: '°C',
    temp10: '°C',
    d1: 'loading',
    d2: 'loading',
    d3: 'loading',
    d4: 'loading',
    d5: 'loading',
    dt1: 'loading',
    dt2: 'loading',
    dt3: 'loading',
    dt4: 'loading',
    dt5: 'loading',
    descd1: 'loading',
    descd2: 'loading',
    descd3: 'loading',
    descd4: 'loading',
    descd5: 'loading',
  }
  fetchWeather = async (lat, lon) => {


    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=${openweathermap_api_key}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.var.temperature = responseJson.current.temp
        this.var.description = responseJson.current.weather[0].main
        this.var.timestamp = responseJson.current.dt
        this.var.grade = responseJson.current.temp


        //timestamp orario e temperatura
        this.var.hour1 = responseJson.hourly[1].dt
        this.var.hour2 = responseJson.hourly[2].dt
        this.var.hour3 = responseJson.hourly[3].dt
        this.var.hour4 = responseJson.hourly[4].dt
        this.var.hour5 = responseJson.hourly[5].dt
        this.var.hour6 = responseJson.hourly[6].dt
        this.var.hour7 = responseJson.hourly[7].dt
        this.var.hour8 = responseJson.hourly[8].dt
        this.var.hour9 = responseJson.hourly[9].dt
        this.var.hour10 = responseJson.hourly[10].dt
        this.var.temp1 = responseJson.hourly[1].temp
        this.var.temp2 = responseJson.hourly[2].temp
        this.var.temp3 = responseJson.hourly[3].temp
        this.var.temp4 = responseJson.hourly[4].temp
        this.var.temp5 = responseJson.hourly[5].temp
        this.var.temp6 = responseJson.hourly[6].temp
        this.var.temp7 = responseJson.hourly[7].temp
        this.var.temp8 = responseJson.hourly[8].temp
        this.var.temp9 = responseJson.hourly[9].temp
        this.var.temp10 = responseJson.hourly[10].temp

        //timestamp 5giorni e temperatura
        this.var.d1 = responseJson.daily[1].dt
        this.var.d2 = responseJson.daily[2].dt
        this.var.d3 = responseJson.daily[3].dt
        this.var.d4 = responseJson.daily[4].dt
        this.var.d5 = responseJson.daily[5].dt
        this.var.dt1 = responseJson.daily[1].temp.day
        this.var.dt2 = responseJson.daily[2].temp.day
        this.var.dt3 = responseJson.daily[3].temp.day
        this.var.dt4 = responseJson.daily[4].temp.day
        this.var.dt5 = responseJson.daily[5].temp.day
        this.var.descd1 = responseJson.daily[0].temp.day

        return responseJson
      })
      .catch((error) => {
        console.log(error)
      })
  }


}

const request = new Request();
export default request;