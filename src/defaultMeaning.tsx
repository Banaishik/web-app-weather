import { IAllDay, ICity, IClouds, ICoord, IList, IMain, IMainBlock, IRain, ISys, IWeather, IWind, IState} from "./types/types";

const cityExample: ICity = {
    coord: {
      lat: 40.7128,
      lon: -74.0060,
    },
    country: 'US',
    id: 5128581,
    name: 'New York',
    population: 8175133,
    sunrise: 1648394053,
    sunset: 1648441566,
    timezone: -18000,
};
  
const cloudsExample: IClouds = {
    all: 20,
};
  
  const mainExample: IMain = {
    feels_like: 25.5,
    grnd_level: 1011,
    humidity: 70,
    pressure: 1011,
    sea_level: 1011,
    temp: 27.5,
    temp_kf: 0.5,
    temp_max: 28,
    temp_min: 27,
  };
  
  const rainExample: IRain = {
    '3h': 1.5,
  };
  
  const sysExample: ISys = {
    country: 'US',
    id: 2009679,
    sunrise: 1648408281,
    sunset: 1648455651,
    type: 1,
  };
  
  const weatherExample: IWeather = {
    description: 'Clear sky',
    icon: '01d',
    id: 800,
    main: 'Clear',
  };
  
  const windExample: IWind = {
    deg: 180,
    gust: 25,
    speed: 20,
  };
  
  const listExample: IList = {
    list : 'sad',
    clouds: cloudsExample,
    dt: 1648425600,
    dt_txt: '2022-03-27 12:00:00',
    main: mainExample,
    pop: 0.1,
    rain: rainExample,
    sys: sysExample,
    visibility: '10000',
    weather: [weatherExample],
    wind: windExample,
  };
  
  const allDayExample: IAllDay = {
    city: cityExample,
    cnt: 8,
    cod: '200',
    list: [listExample],
    message: 0,
  };
  
  const coordExample: ICoord = {
    lon: -74.006,
    lat: 40.7128,
  };
  
  const mainBlockExample: IMainBlock = {
    base: 'stations',
    clouds: cloudsExample,
    cod: 200,
    coord: coordExample,
    dt: 1648425600,
    id: 5128581,
    main: mainExample,
    name: 'New York',
    rain: rainExample,
    sys: sysExample,
    timezone: -18000,
    visibility: 10000,
    weather: [weatherExample],
    wind: windExample,
  };

const defaultAllDay: IAllDay = {
    city: {
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      id: 0,
      name: '',
      population: 0,
      sunrise: 0,
      sunset: 0,
      timezone: 0,
    },
    cnt: 0,
    cod: '',
    list: [],
    message: 0,
};

const initialState: IState = {
    forecastNow: mainBlockExample,
    background: '',
    loadData: false,
    forecastHours: defaultAllDay,
    forecastDays: defaultAllDay,
    windowFavorites: false,
    nameCurrent: 'Berlin',
    favoriteCity: [],
    submit: false,
};

export {
    initialState
}