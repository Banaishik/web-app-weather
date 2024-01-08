import React, { FC } from "react";

import './detailsBlock.css';


interface IPropsDetails {
    details : string
}

export const Details : FC<IPropsDetails> = ({details}) => {
    return (
        <div className="details">
        <span className="details_title">
          {details}
        </span>
      </div>
    )
}