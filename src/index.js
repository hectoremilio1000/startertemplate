import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//agregar amplify resources
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
Amplify.configure(awsconfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
