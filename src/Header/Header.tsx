import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <img
        className="Header__image"
        src={logo}
        alt="Akranes logo"
        height="47"
        width="62"
      />
      <h1 className="Header__title">Akranes Interactive Map</h1>
    </header>
  );
}

export default Header;
