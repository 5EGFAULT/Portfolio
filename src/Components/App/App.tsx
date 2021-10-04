import React from "react";
import Home from "../Home/Home";
import "./App.css";
import NavBar from "../Navigation/NavBar";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route path="/" exact>
            <section>
              home
              {/* <Home /> */}
            </section>
          </Route>
          <Route path="/test" exact>
            <section>
              test
              {/* <Home /> */}
            </section>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
