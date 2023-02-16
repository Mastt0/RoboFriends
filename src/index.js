//New code below which fixed my rendering issue for the "Hello.js" component I created. Courtsey of ChatGPT which told me to use this code isntead. Basically the issue was that the react method 'ReactDOM.createroot' was out of date. I replaced it with the newer method 'createRoot'.
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
