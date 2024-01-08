import React, {FC, useEffect, useState} from "react";
import { IAllDay, IList } from "../../types/types";
import { ItemDay } from "./itemDay";
import { Details } from "../detailsBlock/detailsBlock";

interface IDataDay {
    data : IAllDay
}

export const ListDaysForecast : FC<IDataDay> = ({data}) => {

    const [dataDay, setDataDay] = useState<IList[]>([])

    let dayNowSecond = data.list[0].dt
    let dayNow = data.list[0]
    let oneDaySeconds = 86400

    let nextDay = data.list.filter(item => item.dt === dayNowSecond + oneDaySeconds)
    let twoDay = data.list.filter(item => item.dt === dayNowSecond + (oneDaySeconds * 2))
    let threeDay = data.list.filter(item => item.dt === dayNowSecond + (oneDaySeconds * 3))
    let fourDay = data.list.filter(item => item.dt === dayNowSecond + (oneDaySeconds * 4))

    useEffect(() => {
        setDataDay([dayNow,...nextDay, ...twoDay,...threeDay,...fourDay])
    }, [data])

    const nameDays = (date : string) : string => {
        let daysWeek : string[] = [ 'Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let dayCount : number = new Date(date).getDay() 
        let dayName : string = daysWeek[dayCount]

        return dayName        
    }

    const writeDayItem = () => {
        if (dataDay) {
            return dataDay.map(item => {
                nameDays(item.dt_txt)
                return <ItemDay day={nameDays(item.dt_txt)} main={item.main} weather={item.weather}/> 
            })
        }
    }

    return (
        <>
            <div key={dayNowSecond} className="forecast_information block">
            <Details details="5 day forecast" />
            <hr className="line_decoration"/>
            { 
                dataDay ? (
                    writeDayItem()          
                ) : null
            }
            </div>
        </>
    )
}
