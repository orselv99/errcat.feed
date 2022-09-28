import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';

export function initI18n() {
  i18n
    .use(initReactI18next)
    .init({
      lng: 'EN',
      fallbackLng: {
        en: ['EN'],
        default: ['KO'],
      },
      resources: {
        EN: { translation: en },
        KO: { translation: ko },
      },
      debug: true,
      defaultNS: 'translation',
      ns: 'translation',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export function changeLanguage(code: 'EN' | 'KO') {
  i18n.changeLanguage(code, (error, t) => {
    if (error) console.log('changeLanguage', error);
  })
}