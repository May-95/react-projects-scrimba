import "./index.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./journalData";

export default function App() {
  const cards = data.map((item) => {
    console.log(item);
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="container">{cards}</section>
    </div>
  );
}
