import "./App.css";
import Products from "./components/Fetch/FetchData";
import Timer from "./components/Timer/Timer";
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
