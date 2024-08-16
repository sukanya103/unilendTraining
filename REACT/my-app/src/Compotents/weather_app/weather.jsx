import React, { useEffect, useState } from 'react'
import './weather.css'
import search_icon from './Assets/search.png'
import  clear_icon   from './Assets/clear.png'

export default function Weather() {

    const [weatherData , setWeatherData ] = useState(false)

    
    const search = async (city)=> {
       const abc= process.env.REACT_APP_ID;
       console.log(abc)
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${abc}`
        console.log(url)
        try {
            
            
            const response = await fetch(url);
            const data= await response.json();
            console.log(data)
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.main.speed,
                temperature: Math.floor(data.main.temp ) ,
                location: data.name,

            })
            
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        search("london");
    },[])

  return (
    <div className='weather'>
        <div className='search-bar'>
             <input type="text" placeholder='Search'/>
             <img src={search_icon} alt="" />
        </div>
    <img  src={clear_icon} alt="" />
    <p> {weatherData.temperature}</p> 
    <p> {weatherData.location }</p>
    
    <div className='weather-info' >
        <div  >
            <p>{ weatherData.humidity} %</p> 
            <span>Humidity</span>
        </div>

        <div>
            <p>{ weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
        </div>
    </div>
    
      
    </div>
  )
}
