import React from "react";
import "./card-list.styles.scss";
import { Card } from "../card/card.component";

export const CardList = (items) => {
  return (
    <div className="card-list">
      {items.items.map((items) => (
        <Card key={items.id} title={items.title} imageUrl={items.imageUrl} />
      ))}
    </div>
  );
};

export default CardList;
