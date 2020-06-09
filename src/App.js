import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Målet</li>
          <li>Packningen</li>
          <li>Maten</li>
          <li>Rutten</li>
          <li>Turen</li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>#kungsan2020 - Kungsleden 2020</h1>
      </header>
      <main>
        <p>Även om resan är målet så är de sjukt skönt att komma i mål!</p>
        <p>Min resa startar ca 10 juli 2020. Mitt mål:</p>
        <p>Att gå kunglsedan med all packning från start till mål.</p>
      </main>
    </div>
  );
};

export default App;
