import React from "react";
// import Header from "../components/Header";
import Portada from "../components/Portada";
import Footer from "../components/Footer";
import { Empresa } from "../components/Settings";

function Home() {
  // console.log(Empresa);
  const logo = Empresa[0].route_logo;
  const titulo_portada = Empresa[0].title_portada;
  const descripcion_portada = Empresa[0].description_portada;
  const video_portada = Empresa[0].video_portada;

  return (
    <div>
      <Portada
        titulo_portada={titulo_portada}
        descripcion_portada={descripcion_portada}
        video_portada={video_portada}
      />
      <Footer logo={logo} />
    </div>
  );
}

export default Home;
