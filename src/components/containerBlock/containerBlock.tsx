import React, { FC } from "react";
import { MainBlock } from "../mainBlock/mainBlock";
import { IState } from "../../types/types";
import ListHourForecast from "../itemHour/listHours";
import { ListDaysForecast } from "../itemDays/ListDays";

interface IContainer {
    data : IState
    addCityToFavorite : (city : string) => void
}

export const ContainerBlock : FC<IContainer> = ({data,  addCityToFavorite}) => {
    return (
      <div>
                    
        <MainBlock
          data={data.forecastNow}
          favoriteCities={data.favoriteCity}
          addCityToFavorite={addCityToFavorite}
        />

        <div>
            <ListHourForecast data={data.forecastHours } /> 
            <ListDaysForecast data={data.forecastDays}/>     
        </div>

      </div>
    )
}