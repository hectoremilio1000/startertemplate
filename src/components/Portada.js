import React from "react";
import "../styles/main_portada.css";
import { FaWhatsapp } from "react-icons/fa";

const Portada = props => {
  const { titulo_portada, descripcion_portada, video_portada } = props;
  return (
    <div className="main_portada content_box">
      <div className="text_portada">
        <h1>{titulo_portada}</h1>
        <p>{descripcion_portada}</p>
        <a className="button_w" href="https://wa.me/+5219511028474">
          <FaWhatsapp />
          Reserva ya
        </a>
      </div>
      <div className="video_portada">
        <video loop autoPlay muted src={video_portada}></video>
      </div>
    </div>
  );
};

export default Portada;
