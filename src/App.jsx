import "./App.css";
import Products from "./components/fetch/fetchData";
import Timer from "./components/timer/timer";
import UseGeolocation from "./components/useGeolocation/useGeolocation";

function App() {
  return (
    <>
      <div className="allBox">
        <Timer />
        <Products />
        <UseGeolocation />
      </div>
    </>
  );
}

export default App;
