import React from "react";
import { Route, Switch } from "react-router-dom";

//importamos páginas
import Administrador from "./pages/Administrador";
import Home from "./pages/Home";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/header.css";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/administrador">
        <Administrador />
      </Route>
    </Switch>
  );
}
