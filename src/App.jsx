import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { store } from "./store/store";
import { User } from "./pages/user";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
