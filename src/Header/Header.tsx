import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './Header.css';

function Header() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng: string) => {
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
      <h1 className="Header__title">{t('title')}</h1>
      <div className="Header__languages">
        <div
          className="Header__langage Header__langage--is"
          onClick={() => changeLanguage('is')}
        />
        <div
          className="Header__langage Header__langage--en"
          onClick={() => changeLanguage('en')}
        />
      </div>
    </header>
  );
}

export default Header;
