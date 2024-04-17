import React, {FC, FormEvent, useEffect, useReducer, useState} from "react"

import { ListFavoriteCity } from "./components/favoriteBlock/ListFavorite";
import { ContainerBlock } from "./components/containerBlock/containerBlock";
import { Load } from "./components/loading/loading";
import { IMainBlock, IAllDay } from "./types/types";

import reducer from "./reducer";
import { initialState } from "./defaultMeaning";

import {
  actionSetForecastNow,
  actionSetBackground,
  actionSetLoadData,
  actionSetForecastHours,
  actionWindowFavorite,
  actionSetForecastDay,
  actionSetNameCurrent,
  actionFavoriteCities,
  actionSetSubmit
} from "./components/actions/actions"

import './App.css';

const App : FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [keyRerenderBackground, setKeyRerenderBackground] = useState<number>(1)

  const favoriteCityLocalStore : string | null = localStorage.getItem('favorite') 
  
  const getData = async (city : string) => {
    try {

      const apiKey : string = 'f660a2fb1e4bad108d6160b7f58c555f';

      const responseDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&days=5&appid=${apiKey}`)
      const responseHour = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      const responseDayNow = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

      const resultDayNow : IMainBlock = await responseDayNow.json()
      const resultHour : IAllDay = await responseHour.json()
      const resultDays : IAllDay = await responseDays.json()


      dispatch(actionSetForecastNow(resultDayNow))
      dispatch(actionSetForecastHours(resultHour))
      dispatch(actionSetForecastDay(resultDays))
      dispatch(actionSetLoadData(true))

    } catch (error) {
      console.log(`problem receiving data ${error}`)
    }
  }
  
  const addNameCity = (city : string) : void => {
    dispatch(actionSetNameCurrent(city))
  }

  const addCurrentCity = (e : React.FormEvent<HTMLInputElement>) : void => {
    e.preventDefault()
    addNameCity(e.currentTarget.value)
  } 

  const handleModalFavorite = () : void => {
    dispatch(actionWindowFavorite(!state.windowFavorites))
  }
  
  const handleBackground = (weather : string) : string => {
    switch (weather) {
      
      case "Clouds" : 
        return 'https://media.istockphoto.com/id/1297699734/pl/filmy/timelapse-b-roll-nagrania-z-po%C5%82udnia-s%C5%82o%C5%84ca-kszta%C5%82t-gwiazdy-promieni-s%C5%82onecznych-flary.mp4?s=mp4-640x640-is&k=20&c=heMYW_NDE4EjlhTFK_hykqbDJaSrn4AswEzi8BWTQtA='
       
      case "Clear" : 
        return 'https://media.istockphoto.com/id/1297699734/pl/filmy/timelapse-b-roll-nagrania-z-po%C5%82udnia-s%C5%82o%C5%84ca-kszta%C5%82t-gwiazdy-promieni-s%C5%82onecznych-flary.mp4?s=mp4-640x640-is&k=20&c=heMYW_NDE4EjlhTFK_hykqbDJaSrn4AswEzi8BWTQtA='
       
      case "Snow" : 
        return 'https://img.pikbest.com/09/19/02/71CpIkbEsTqzP.mp4'
       
      case "Rain" : 
        return 'https://st5.depositphotos.com/56260936/67082/v/600/depositphotos_670821854-stock-video-loop-falling-rain-background-rainy.mp4'
      
      case "overcast clouds" : 
        return 'https://media.istockphoto.com/id/628741930/pl/filmy/wyczy%C5%9B%C4%87-niebo-z-chmury.mp4?s=mp4-640x640-is&k=20&c=53UAOmGnTmuZpVUYWBAftv1dX0HslhFNwjMR2qMIe80='

      case "broken clouds" : 
        return 'https://media.istockphoto.com/id/628741930/pl/filmy/wyczy%C5%9B%C4%87-niebo-z-chmury.mp4?s=mp4-640x640-is&k=20&c=53UAOmGnTmuZpVUYWBAftv1dX0HslhFNwjMR2qMIe80='
      default : {
        return 'https://media.istockphoto.com/id/1297699734/pl/filmy/timelapse-b-roll-nagrania-z-po%C5%82udnia-s%C5%82o%C5%84ca-kszta%C5%82t-gwiazdy-promieni-s%C5%82onecznych-flary.mp4?s=mp4-640x640-is&k=20&c=heMYW_NDE4EjlhTFK_hykqbDJaSrn4AswEzi8BWTQtA='
      }

    }
  }  

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    dispatch(actionSetSubmit(!state.submit))
  }

  const handleSubmitFunc = () : void => {
    dispatch(actionSetSubmit(!state.submit))
  }

  const addCityToFavorite = async (city : string) : Promise<void> => {
    try {
      let updatedFavoriteCity : string[] = []

      if (state.favoriteCity.indexOf(city) === -1) {  
        updatedFavoriteCity = [city, ...state.favoriteCity]
      } else {
        updatedFavoriteCity = state.favoriteCity.filter((item : string) => item !== city)
      }

      await new Promise((resolve) => {
        dispatch(actionFavoriteCities(updatedFavoriteCity))
        resolve(true)
      })

      localStorage.removeItem('favorite')
      localStorage.setItem('favorite', JSON.stringify(updatedFavoriteCity))  

    } catch (error) {
      console.log(error);
    }
  }

  const deleteFavoriteCity = (city : string) : void => {
    const newArray : string[] = state.favoriteCity.filter((item : string) => item!== city)
    dispatch(actionFavoriteCities([...newArray]))

    localStorage.removeItem('favorite')
    localStorage.setItem('favorite', JSON.stringify(newArray))     
  }
  
  useEffect(() => {
    try {
      if (state.forecastNow?.weather[0].main) {
        let background = handleBackground(state.forecastNow?.weather[0].main || 'Clouds')
        dispatch(actionSetBackground(background))
      }      
    } 
    catch (error) {
        console.log(`error in setting the background ${error}`);
    }
  }, [state.forecastNow?.weather[0].main]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData(state.nameCurrent)
      } 
      catch (error) {
        console.error(`data error ${error}`);
      }
    };
  
    fetchData();
  }, [state.submit])

  useEffect(() => {
    try {
      if (favoriteCityLocalStore) {
        dispatch({type : "SET_FAVORITE_CITIES", payload : [...JSON.parse(favoriteCityLocalStore)]})
      } else {
        console.log('Something went wrong');
      }      
    } catch (error) {
      console.log(`error when working with storage ${error}`);
    }
  }, [])

  useEffect(() => {
    setKeyRerenderBackground(keyRerenderBackground + 1)
  }, [state.background])
  
  return (
    <>
      {
        state.loadData && state ? (
        <div >
          <div key={keyRerenderBackground}>
            <video autoPlay muted loop  id="myVideo">
              <source src={state.background} type="video/webm"/>
            </video>             
          </div>

          {/* {
            state.windowFavorites ? null : ( */}
              <div className="icons_menu" onClick={handleModalFavorite}>
                <img src='https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg' />
              </div>                  
            )
          {/* } */}
    
          <div className="App">
            <ListFavoriteCity
              windowFavorites={state.windowFavorites}
              deleteFavoriteCity={deleteFavoriteCity}
              addCity={addNameCity}
              handleSubmit={handleSubmitFunc}
              favoriteCites={state.favoriteCity}
              handleModalFavorite={handleModalFavorite}
            />

            <div className="container">

              <form className="form_block" onSubmit={(e) => handleSubmit(e)}  >
                <input className="mainInput" placeholder="Search" onChange={addCurrentCity}/>
              </form>

              <ContainerBlock data={state} addCityToFavorite={addCityToFavorite} />

              </div>           
            </div>   
        </div>
        ) : 
        (
          <Load />
        )
      }
    </>
  )
} 

export default App;