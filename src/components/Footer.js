import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/footer.css";

import { FaSprayCan } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Footer = (props) => {
  const { logo } = props;
  return (
    <div className="footer content_box">
      <Router>
        <Link className="logo"></Link>
        <img src={logo} alt="mi_logo" style={{ width: "200px" }} />
        <div className="footer_box">
          <p className="title_footer">Services</p>
          <p className="detail_footer">Servicio de Sanitizacion</p>
          <p className="detail_footer">Servicio de desinfeccion a domicilio</p>
        </div>
        <div className="footer_box">
          <p className="title_footer">Contacto</p>
          <p className="detail_footer">
            <FaPhoneAlt /> +52 91562356898
          </p>
          <p className="detail_footer">
            <FaEnvelope /> sanitizamihogar@gmail.com
          </p>
        </div>
        <Switch>
          <Route path="/contacto">
            <p>contacto</p>
          </Route>
          <Route path="/reserva">
            <p>reserva</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Footer;
