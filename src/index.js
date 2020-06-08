import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Kandy from "../src/Kandy";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kandy />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
