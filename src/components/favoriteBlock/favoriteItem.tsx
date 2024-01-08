import React, {FC} from "react";

interface IFavoriteItem {
    nameCity : string;
    addCity : (city : string) => void;
    handleSubmit : () => void;
    deleteFavoriteCity : (city : string) => void;
}

const FavoriteItem : FC<IFavoriteItem> = ({nameCity, addCity, handleSubmit, deleteFavoriteCity}) => {
    return (
        <>
            <div className="itemFavoriteCity">
                <span 
                    onClick={() => {
                        addCity(nameCity)
                        handleSubmit()
                    }}
                    className="nameItemCity"
                >{nameCity}</span>
                <span className="delete_favorite_city" onClick={() => deleteFavoriteCity(nameCity)}>&#10006;</span>
            </div>
        </>
    )
}

export default FavoriteItem