import "./App.css";
import Card from "./components/Card/Card";
import cardData from "./data/card-data";

function App() {
  return (
    <div className="cards">
      {cardData.map((card) => (
        <Card name={card.name} image={card.image} />
      ))}
    </div>
  );
}

export default App;
