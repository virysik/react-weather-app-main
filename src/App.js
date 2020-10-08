import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project is created by Vera Kuzjo and is an
        <a
          href="https://github.com/virysik/react-weather-app-main"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
