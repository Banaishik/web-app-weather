// interface data weather
interface ICity {
    coord : {
        lat : number;
        lon : number
    }
    country : string;
    id: number;
    name: string;
    population:     number;
    sunrise : number;
    sunset : number;
    timezone : number
}

interface IClouds {
    all : number;
}

interface IMain {
    feels_like : number;
    grnd_level: number;
    humidity : number;
    pressure : number;
    sea_level : number;
    temp : number;
    temp_kf : number;
    temp_max : number;
    temp_min : number

}

interface IRain {
    '3h' : number
}

interface ISys {
    country : string
    id : number;
    sunrise : number;
    sunset : number;
    type : number;
}

interface IWeather {
    description : string;
    icon : string;
    id : number;
    main : string;
}

interface IWind {
    deg : number;
    gust : number;
    speed : number;
}

interface IList {
    list: any; 
    clouds : IClouds;
    dt : number;
    dt_txt : string;
    main : IMain;
    pop : number;
    rain : IRain;
    sys : ISys;
    visibility : string;
    weather : IWeather[];
    wind : IWind;
}

interface IAllDay {
    city : ICity;
    cnt: number;
    cod : string;
    list : IList[];
    message: number;
}

interface ICoord {
    lon: number, 
    lat: number;
}

interface IMainBlock {
    base : string;
    clouds : IClouds;
    cod : number;
    coord : ICoord;
    dt : number;
    id : number;
    main : IMain;
    name : string;
    rain : IRain;
    sys : ISys;
    timezone : number;
    visibility : number;
    weather : IWeather[];
    wind : IWind;
}

// IActions

interface IForecastNow  {
    type : "SET_FORECAST_NOW";
    payload : IMainBlock;
}

interface ISetBackground  {
    type : "SET_BACKGROUND";
    payload : string;
}

interface ILoadData {
    type : "SET_LOAD_DATA";
    payload : boolean;
}

interface IForecastHours {
    type : "SET_FORECAST_HOURS";
    payload : IAllDay;
}

interface IForecastDays {
    type : "SET_FORECAST_DAYS";
    payload : IAllDay;
}

interface IWindowFavorite {
    type : "SET_WINDOW_FAVORITE";
    payload : boolean;
}

interface INameCurrent {
    type : "SET_NAME_CURRENT";
    payload : string;
}

interface IFavoriteCities {
    type : "SET_FAVORITE_CITIES";
    payload : string[]
}

interface ISubmit {
    type : "SET_SUBMIT";
    payload  : boolean;
}

// interface state

interface IState {
    forecastNow : IMainBlock;
    background : string;
    loadData : boolean;
    forecastHours : IAllDay;
    forecastDays : IAllDay;
    windowFavorites : boolean;
    nameCurrent : string;
    favoriteCity : string[];
    submit : boolean;
}

export type {
    ICity,
    IClouds,
    IMain,
    IRain,
    ISys,
    IWeather,
    ICoord,
    IWind,
    IList,
    IAllDay,
    IMainBlock,
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
}