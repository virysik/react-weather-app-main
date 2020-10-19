import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by {" "}
          <a href = "https://www.linkedin.com/in/vera-kuzjo-b6b9285a/"
            target="_blank"
            rel="noopener noreferrer">Vera Kuzjo</a>
              {" "}and is
          <a
            href="https://github.com/virysik/react-weather-app-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
