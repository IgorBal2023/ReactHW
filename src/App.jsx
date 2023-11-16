import "./App.css";
import Products from "./components/Fetch/fetch";
import Timer from "./components/Timer/timer";
import UseGeolocation from "./components/UseGeolocation/UseGeolocation";

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
