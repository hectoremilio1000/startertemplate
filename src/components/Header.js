import React, { useState } from "react";
// import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = props => {
  const { logo } = props;
  const [show_menu, setShow_menu] = useState(false);
  const menu_toggle = () => {
    setShow_menu(!show_menu);
  };
  return (
    <Router>
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

      <Switch>
        <Route path="/contacto">
          <About />
        </Route>
        <Route path="/reserva">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default Header;
