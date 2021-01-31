import React from "react";
import "./card.styles.scss";

export const Card = ({title, imageUrl}) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={imageUrl}
        alt={title}
      />
      <p className="card__title"> {title}</p>
    </div>
  );
};

export default Card;