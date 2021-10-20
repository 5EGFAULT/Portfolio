import React from "react";
import Home from "../Home/Home";
import "./App.css";
import NavBar from "../Navigation/NavBar";
import { Route, Switch } from "react-router";
import ThemeSwitcher from "../Navigation/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ThemeSwitcher></ThemeSwitcher>
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <section>
              <Home />
            </section>
          </Route>
          <Route path="/test" exact>
            <section>{/* <Home /> */}</section>
          </Route>
        </Switch>
        <footer></footer>
      </main>
    </div>
  );
}

export default App;
