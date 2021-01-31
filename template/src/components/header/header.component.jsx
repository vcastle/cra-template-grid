import React from "react";
import "./header.styles.scss";

export const Header = ({ headerText }) => (
  <div className="header">
    <p className="header__text ">{headerText}</p>
  </div>
);
