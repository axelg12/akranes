import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './Header.css';

function Header() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    console.log('abc', lng);
    i18n.changeLanguage(lng);
  };
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
      <button onClick={() => changeLanguage('is')}>is</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </header>
  );
}

export default Header;
