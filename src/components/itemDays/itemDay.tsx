import React, { FC, useEffect, useState } from "react";

import './itemDay.css';
import { IMain, IWeather } from "../../types/types";

interface IItemDay {
    day : string;
    main : IMain;
    weather : IWeather[];
}

export const ItemDay : FC<IItemDay> = ({day, main, weather}) => {

    const [background, setBackground] = useState<string>('');

    const temperatureMax = Math.round(main.temp_max)
    const temperatureMin = Math.round(main.temp_min)

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
        setBackground(handleBackground(weather[0].main))
    })

    return (
        <div className="sample_day_weather">

            <span className="day_week"> 
                {day}
            </span>

            <div className="img_sky">
                <img src={background}/>
            </div>

            <div className="graph_maxmin">
                <div className="line_maxmin">
                    <span className="max_temp">{temperatureMax}°</span>
                    <span className="min_temp">{temperatureMin - 3}°</span>
                </div>
            </div>

            <hr className="line_decoration"/>

        </div>
    )
}