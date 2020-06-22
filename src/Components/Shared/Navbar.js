import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Image, Nav, Navbar } from "react-bootstrap";
import "../../StyleSheet/Navbar.css";

const navBar = () => (
  <Navbar expand="lg" id={"nav-bar"} sticky="top">
    <Navbar.Brand>
      <Link to="/">
        <Image
          id="logo"
          src={"../images/covidLogo.svg"}
          alt={"covid-19 DashBoard"}
        />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      id={"responsiveToggle"}
      children={<Icon name="bars" size="large" />}
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto float-right">
        <Link to="/aboutUs/">About Us</Link>
        <Link to="/dashboard/">Dashboard</Link>
        <Link to="/contactUs/">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navBar;
