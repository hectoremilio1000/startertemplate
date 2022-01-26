import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { BrowserRouter as Router } from "react-router-dom";

const Header = props => {
  const { logo } = props;
  const [show_menu, setShow_menu] = useState(false);
  const menu_toggle = () => {
    setShow_menu(!show_menu);
  };
  return (
    <header>
      <Link className="logo" to="/">
        <img style={{ width: "150px" }} src={logo} alt="mi logo" />
      </Link>
      <nav className={`navbar ${show_menu ? "active" : ""}`}>
        <Link to="/" className="active" href="#home">
          home
        </Link>

        <a href="https://wa.me/+5219511028474">Reserva</a>

        <a href="#contacto">Contacto</a>
        <Link to="/administrador">Administrador</Link>
      </nav>
      <div className="icons">
        <span className="block_icon">
          <FaBars id="menu-bars" onClick={menu_toggle} />
        </span>
        <Link to="/about" className="contacto_w">
          <FaWhatsapp /> <p>+52915096462</p>
        </Link>

        {/* <Link className="fas fa-heart"></Link>
        <Link className="fas fa-shopping-cart"></Link> */}
      </div>
    </header>
  );
};

export default Header;
