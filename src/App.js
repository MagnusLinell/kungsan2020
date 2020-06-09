import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Målet</Link>
          </li>
          <li>
            <Link to="/pack">Packningen</Link>
          </li>
          <li>
            <Link to="/food">Maten</Link>
          </li>
          <li>
            <Link to="/route">Rutten</Link>
          </li>
          <li>
            <Link to="/way">Vägen</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>#kungsan2020 - Kungsleden 2020</h1>
      </header>
      <Switch>
        <Route to="/">
          <main>
            <p>Även om resan är målet så är de sjukt skönt att komma i mål!</p>
            <p>Min resa startar ca 10 juli 2020. Mitt mål:</p>
            <p>Att gå kunglsedan med all packning från start till mål.</p>
          </main>
        </Route>
        <Route to="/pack">
          <main>
            <p>Vad är i packningen?</p>
          </main>
        </Route>
        <Route to="/food">
          <main>
            <p>Vad äter du?</p>
          </main>
        </Route>
        <Route to="/route">
          <main>
            <p>Vad är rutten?</p>
          </main>
        </Route>
        <Route to="/way">
          <main>
            <p>Vad är vägen?</p>
          </main>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
