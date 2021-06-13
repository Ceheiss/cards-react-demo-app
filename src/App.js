import "./App.css";
import { useState } from "react";
import Card from "./components/Card/Card";
import cardData from "./data/card-data";

function App() {
  const [selectedPlace, setSelectedPlace] = useState("");
  return (
    <>
      <h1 className="selected-place">{selectedPlace}</h1>
      <div className="cards">
        {cardData.map((card) => (
          <Card
            name={card.name}
            image={card.image}
            selectPlace={(place) => setSelectedPlace(place)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
