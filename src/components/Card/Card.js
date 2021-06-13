import React from "react";
import "./Card.css";

const Card = ({ name, image, selectPlace }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt="some random place" />
      <button onClick={() => selectPlace(name)}>Select Place</button>
    </div>
  );
};

export default Card;
