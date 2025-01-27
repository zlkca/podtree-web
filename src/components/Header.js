import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://s3.us-east-1.amazonaws.com/podtree.ca/favicon.ico"
          alt="Logo"
          className="logo-image"
        />
        <span className="logo-text">Podtree</span>
      </div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Products
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="https://admin.podtree.ca/">Podtree Admin</a>
                </li>
                <li>
                  <a href="/goalsp">Goalsp</a>
                </li>
              </ul>
            )}
          </li>
          {/* <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
