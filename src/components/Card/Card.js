import React from "react";
import "./Card.css";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt="some random place" />
    </div>
  );
};

export default Card;
