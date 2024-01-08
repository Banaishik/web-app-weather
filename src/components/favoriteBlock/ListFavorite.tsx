import React, {FC, useEffect, useState} from "react";
import FavoriteItem from "./favoriteItem";

import "./favoriteItem.css"

interface IFavoriteCites {
    favoriteCites : string[];
    windowFavorites : boolean;
    handleModalFavorite : () => void;
    addCity : (city : string) => void;
    handleSubmit : () => void;
    deleteFavoriteCity : (city : string) => void;
}

export const ListFavoriteCity : FC<IFavoriteCites> = ({favoriteCites, windowFavorites, handleModalFavorite, addCity, handleSubmit, deleteFavoriteCity}) => {
    
    const [isCity, setIsCity] = useState<boolean>()    

    useEffect(() => {
        if (favoriteCites.length === 0 ) {
            setIsCity(false)
        } 
        else {
            setIsCity(true)
        }
    }, [favoriteCites])
    
    return (
        <>
           <div className={`favorites ${windowFavorites ? "block_menu" : "hide"}`}>
                <span className="close_favorite_window" onClick={handleModalFavorite} >&#10006;</span>

                {
                    isCity ? (
                        favoriteCites.map(item => <FavoriteItem deleteFavoriteCity={deleteFavoriteCity} addCity={addCity} handleSubmit={handleSubmit} nameCity={item}/>)       
                    ) : (
                        <h1>
                            this is the window for your favorite cities
                        </h1>
                    )
                }     
            </div>     
        </>
    )
}

 