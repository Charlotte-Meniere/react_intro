import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const real = false;
  return (
    <div className="App">
      <h1>Hello 2+2 {real ? "yes" : "no"}</h1>
      <Header title="welcome home!" />
    </div>
  );
}

export default App;
