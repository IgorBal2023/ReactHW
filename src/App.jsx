import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Home } from "./components/home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { Product } from "./components/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
