import React, { FC, useEffect, useState } from "react";

import { IAllDay, IList } from "../../types/types";
import { Details } from "../detailsBlock/detailsBlock";
import { ItemHour } from "./itemHour";

import "./itemHour.css"


interface IDataHour {
    data : IAllDay,
}

const ListHourForecast : FC<IDataHour> = ({data}) => {

    const [dataHour, setDataHour] = useState<IList[]>([])    

    useEffect(() => {
        setDataHour(data.list.slice(0, 7))
    }, [data])
 
    return (
        <> 
            <div className="information_hours block">
                <Details details={`history weather`} />

                <hr className="line_decoration"/>
                {
                    dataHour.map(item => {
                        return <ItemHour  weather={item.weather}  time={item.dt} temperature={item.main.temp} />
                    })   
                }
            </div>
        </>
    )

}

export default ListHourForecast