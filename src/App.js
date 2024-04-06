import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://teslimat-porfolio.netlify.app"
            target="_blank"
            rel="noreferrer">
            Teslimat Adeyemi{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Teslimat/react-weather-project"
            target="_blank"
            rel="noreferrer">
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
