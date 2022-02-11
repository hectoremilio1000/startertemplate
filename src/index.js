import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//antd
import "antd/dist/antd.min.css";

//agregar amplify resources
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Router from "./components/Router";
Amplify.configure(awsconfig);

ReactDOM.render(<Router></Router>, document.getElementById("root"));
