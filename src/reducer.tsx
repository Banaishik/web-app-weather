import {
    IForecastNow,
    ISetBackground,
    ILoadData,
    IForecastHours,
    IForecastDays,
    IWindowFavorite,
    INameCurrent,
    IFavoriteCities,
    ISubmit,
    IState
} from "./types/types"

type IAction =
    | IForecastNow
    | ISetBackground
    | ILoadData
    | IForecastHours
    | IForecastDays
    | INameCurrent
    | IWindowFavorite
    | IFavoriteCities
    | ISubmit

const reducer = (state : IState, action : IAction ) => {
    switch (action.type) {
        case 'SET_FORECAST_NOW': {
            return {
                ...state,
                forecastNow : action.payload
            }
        }
        case "SET_BACKGROUND" : {
            return {
                ...state,
                background : action.payload
            }
        }
        case "SET_LOAD_DATA" : {
            return {
                ...state,
                loadData : action.payload
            }
        }
        case "SET_FORECAST_HOURS" : {
            return {
                ...state,
                forecastHours : action.payload
            }
        }
        case "SET_FORECAST_DAYS" : {
            return {
                ...state,
                forecastDays : action.payload
            }
        }
        case "SET_NAME_CURRENT" : {
            return {
                ...state,
                nameCurrent : action.payload
            }
        }
        case "SET_WINDOW_FAVORITE" : {
            return {
                ...state,
                windowFavorites : action.payload
            }
        }
        case "SET_FAVORITE_CITIES" : {
            return {
                ...state,
                favoriteCity : action.payload
            }
        }
        case "SET_SUBMIT" : {
            return {
                ...state,
                submit : action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default reducer