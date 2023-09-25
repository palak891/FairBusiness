import React from "react";
import './FooterNavbar.css';
import { Link } from 'react-router-dom';

function FooterNavbar() {
  const navStyle = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    fontSize: "0",

    paddingTop: "50px",

    marginLeft: "20px"
  };

  const liStyle = {
    margin: 0,
    padding: 0,
    fontSize: "18px",
    color: "white",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontFamily: "Rufina",
    marginLeft: "50px"
  };

  return (
    <nav style={{ height: "130px", backgroundColor: "#021130" }}>
      <ul style={navStyle}>
        <li style={liStyle}>
          <Link to="/services" style={linkStyle}>
            Services
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/schedule" style={linkStyle}>
            Schedule appointment
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li style={liStyle}>
          <a href="#faq" style={linkStyle}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNavbar;
