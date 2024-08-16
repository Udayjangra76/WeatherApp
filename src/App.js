/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Created with Uday Jangra

        {" "}
        -
        Connect With Me: {" "}
        <a target="_blank" href="https://www.linkedin.com/in/uday-jangra-6900b1211/">
          linkedin
        </a>{" "}
        |
        {" "}
        <a target="_blank" href="https://github.com/Udayjangra76">
          github
        </a>{" "}
        |
        {" "}
        <a target="_blank" href="mailto:uday.jangra76@gmail.com">Email</a>
      </div>
    </React.Fragment>
  );
}

export default App;
