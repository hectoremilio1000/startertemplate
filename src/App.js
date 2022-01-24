import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portada from "./components/Portada";
import { Empresa } from "./components/Settings";
import { Colors_page } from "./components/Settings";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/header.css";

export default function App() {
  console.log(Empresa);
  const logo = Empresa[0].route_logo;
  const titulo_portada = Empresa[0].title_portada;
  const descripcion_portada = Empresa[0].description_portada;
  const video_portada = Empresa[0].video_portada;

  return (
    <div>
      <Header logo={logo} />
      <Portada
        titulo_portada={titulo_portada}
        descripcion_portada={descripcion_portada}
        video_portada={video_portada}
      />
      <Footer logo={logo} />
    </div>
  );
}
