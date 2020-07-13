import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en.json';
import translationIS from './is.json';

// the translations
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: translationEN,
  },
  is: {
    translation: translationIS,
  },
};

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'is',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
