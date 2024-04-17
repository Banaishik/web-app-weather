import { IAllDay, IMainBlock } from "../../types/types"

import {
    IForecastNow,
    ISetBackground,
    ILoadData,
    IForecastHours,
    IForecastDays,
    IWindowFavorite,
    INameCurrent,
    IFavoriteCities,
    ISubmit
} from "../../types/types"

enum ActionTypes {
    SET_FORECAST_NOW = 'SET_FORECAST_NOW',
    SET_FORECAST_HOURS = 'SET_FORECAST_HOURS',
    SET_BACKGROUND = 'SET_BACKGROUND',
    SET_LOAD_DATA = "SET_LOAD_DATA",
    SET_FORECAST_DAYS = "SET_FORECAST_DAYS",
    SET_WINDOW_FAVORITE = "SET_WINDOW_FAVORITE",
    SET_NAME_CURRENT = "SET_NAME_CURRENT",
    SET_FAVORITE_CITIES = "SET_FAVORITE_CITIES",
    SET_SUBMIT = "SET_SUBMIT"
}

const actionSetForecastNow = (payload : IMainBlock) : IForecastNow => ({
    type : ActionTypes.SET_FORECAST_NOW,
    payload    
})

const actionSetBackground = (payload : string) : ISetBackground => ({
    type : ActionTypes.SET_BACKGROUND,
    payload    
})

const actionSetLoadData = (payload : boolean) : ILoadData => ({
    type : ActionTypes.SET_LOAD_DATA,
    payload    
})

const actionSetForecastHours = (payload : IAllDay) : IForecastHours => ({
    type : ActionTypes.SET_FORECAST_HOURS,
    payload    
})

const actionWindowFavorite = (payload : boolean) : IWindowFavorite => ({
    type : ActionTypes.SET_WINDOW_FAVORITE,
    payload    
})

const actionSetForecastDay = (payload : IAllDay) : IForecastDays => ({
    type : ActionTypes.SET_FORECAST_DAYS,
    payload    
})

const actionSetNameCurrent = (payload : string) : INameCurrent => ({
    type : ActionTypes.SET_NAME_CURRENT,
    payload    
})

const actionFavoriteCities = (payload : string[]) : IFavoriteCities => ({
    type : ActionTypes.SET_FAVORITE_CITIES,
    payload    
})

const actionSetSubmit = (payload : boolean) : ISubmit => ({
    type : ActionTypes.SET_SUBMIT,
    payload    
})

export {
    actionSetForecastNow,
    actionSetBackground,
    actionSetLoadData,
    actionSetForecastHours,
    actionWindowFavorite,
    actionSetForecastDay,
    actionSetNameCurrent,
    actionFavoriteCities,
    actionSetSubmit
}