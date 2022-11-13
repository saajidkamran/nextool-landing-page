import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home_Card from "./components/Home_Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home_Card />
    </div>
  );
}

export default App;
