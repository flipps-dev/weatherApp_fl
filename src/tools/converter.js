const ABSOLUTE_ZERO = 273.15;
const MILLISEC = 1000
const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"];

class Converter {
     kelvinToCelsius = (temp) => {
        return Math.floor(temp - ABSOLUTE_ZERO);
    }
    
    
     timestaptoHours = (timestap)=> {
        const t = new Date(timestap * MILLISEC)
    
         var hour = t.getHours();
         var minutes = t.getMinutes();
        var ampm = hour >= 12 ? 'p.m.' : 'a.m.';
        hour = hour % 12;
        hour = hour ? hour : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
    
        return `${hour}:${minutes}${ampm}`;
    }
    
    
    timestampToDay = (timestap)=> {
        const dayID = new Date(timestap * MILLISEC).getDay()
        return DAY[dayID];
    }
    
    
   timestampDate = (timestap)=> {
        const t = new Date(timestap * MILLISEC)
    
        const date = t.getDate();
        const day = DAY[t.getDay()]
        const month = MONTH[t.getMonth()];
    
        return `${day} ${date},${month}`;
    
    }

    hourForecast= (timestap)=>{
        const t = new Date(timestap * MILLISEC)
    
         var hour = t.getHours();
            var ampm = hour >= 12 ? 'p.m.' : 'a.m.';
            hour = hour % 12;
            hour = hour ? hour : 12;
            
    
        return `${hour}${ampm}`;
    }
}



const convert = new Converter()
export default convert