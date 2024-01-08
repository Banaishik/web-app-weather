import React, { FC, useEffect, useState } from "react";

import { IWeather } from "../../types/types";

import './itemHour.css';

interface IItemHour {
  time : number;
  temperature : number;
  weather : IWeather[];
}

export const ItemHour : FC<IItemHour> = ({time, temperature, weather}) => {  

    const [src, setSrc] = useState<string>('');

    const date = new Date(time * 1000)
    const hour = date.getHours() - 1
    const temp = Math.round(temperature)

    const handleBackground = (weather : string) : string => {
        switch (weather) {
          case "Clouds" : 
            return "https://cdn-icons-png.flaticon.com/512/831/831682.png"           
          case "Clear" : 
            return "https://cdn-icons-png.flaticon.com/512/831/831682.png"  

          case "Snow" : 
            return 'https://cdn-icons-png.flaticon.com/512/2439/2439702.png'
           
          case "Rain" : 
            return 'https://cdn-icons-png.flaticon.com/512/263/263883.png'
          
          case "overcast clouds" : 
            return "https://cdn-icons-png.flaticon.com/256/179/179287.png"
          case "broken clouds" : 
            return 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'
          default : {
            return 'https://cdn-icons-png.flaticon.com/512/831/831682.png'
          }
          }
    }

    useEffect(() => {
        setSrc(handleBackground(weather[0].main))
    }, [weather])

    return (
        <div className="sample_hourse_weather">
            <div>
                <span>{hour}:00</span>
            </div>
            <div>
                {
                src ? <img src={src}/> : null
                }
            </div>
            <div>
                <span>{temp}°</span>
            </div>
      </div>
    )
}