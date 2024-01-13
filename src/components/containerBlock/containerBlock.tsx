import React, { FC } from "react";
import { MainBlock } from "../mainBlock/mainBlock.tsx";
import { IState } from "../../types/types.tsx";
import ListHourForecast from "../itemHour/listHours.tsx";
import { ListDaysForecast } from "../itemDays/ListDays.tsx";

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