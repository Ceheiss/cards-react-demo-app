import "./App.css";
import Card from "./components/Card/Card";
import cardData from "./data/card-data";

function App() {
  return (
    <div className="cards">
      <Card name={cardData[0].name} image={cardData[0].image} />
    </div>
  );
}

export default App;
