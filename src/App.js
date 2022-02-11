import React from "react";
import { Route, Switch } from "react-router-dom";

//importamos páginas
import Administrador from "./pages/Administrador";
import Home from "./pages/Home";
import Prueba from "./pages/prueba";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/header.css";
import LoginReducer2 from "./context/loginReducer2";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/administrador">
        <Administrador />
      </Route>
      <Route exact path="/prueba">
        <Prueba />
      </Route>
    </Switch>
  );
}
