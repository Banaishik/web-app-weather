import React, { FC, useEffect, useState } from "react";
import {IMainBlock} from "../../types/types";

import './mainBlock.css';

interface IData  {
  data : IMainBlock,
  favoriteCities : string[]
}

interface IBlockMain extends IData {
  addCityToFavorite : (city : string) => void;
}

export const MainBlock : FC<IBlockMain> = ({data, favoriteCities, addCityToFavorite}) => {
  
  const [isFavorite, setIsFavorite] = useState<boolean>();

  let temperature : number = Math.round(data.main.temp)
  let maxTemperature : number = Math.round(data.main.temp_max)
  let minTemperature : number = Math.round(data.main.temp_min)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    addCityToFavorite(data.name)
  }

  useEffect(() => {
    try {
      if (favoriteCities.indexOf(data.name) === -1) {
        setIsFavorite(false)
      } else {
        setIsFavorite(true)
      }      
    } catch (error) {
      console.log(error)
    }

  }, [favoriteCities, data.name])

  return (
      <div className="main_information ">
        <div className="main_text main_city">
          <span >{data.name}</span>
        </div>
        <div className="main_text main_temp">
          <span>{temperature}°</span>
        </div>
        <div className="main_text main_sky">
          <span>{data.weather[0].description}</span>
        </div>
        <div className="main_text main_maxmin">
          <span>maks: {minTemperature}° , </span>
          <span> min: {maxTemperature}°</span>
        </div >

        {
          isFavorite ? (
            <div className="icons_favorite" onClick={handleFavorite}>
              <img src="https://cdn.icon-icons.com/icons2/3997/PNG/512/archive_bookmark_save_appreciation_support_appreciate_icon_254064.png" />
            </div>                 
          ) : (
            <div className="icons_favorite" onClick={handleFavorite}>
                <img src="https://cdn.icon-icons.com/icons2/3997/PNG/512/archive_bookmark_save_appreciation_support_appreciate_icon_254080.png" />
            </div>    
          )
        }

      </div>
  )
}