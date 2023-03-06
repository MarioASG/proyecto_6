import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div></div>
        <Link to="home-section" smooth={true} duration={500} className="link" >
        Home
        </Link>
        <Link to="briefcase-section" smooth={true} duration={500} className="link" >
        Portafolio
        </Link>
        <Link to="about-section" smooth={true} duration={500} className="link" >
        Acerca de
        </Link>
        <Link to="contact-section" smooth={true} duration={500} className="link" >
        Contacto
        </Link>
    </div>
  );
};

export default NavBar;
