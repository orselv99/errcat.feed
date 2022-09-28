import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de.json';
import en from './en.json';
import ja from './ja.json';
import ko from './ko.json';

let current = 'EN';

export function initI18n() {
  // // TODO
  // // CORS, 배포해서 다시 확인할 것
  // // 로그인 전에는 접속 위치에 따라 초기언어 설정
  // axios({
  //   method: 'GET',
  //   url: 'https://geolocation-db.com/json',
  // })
  //   .then((value) => { console.log('RESULT', value.data); })
  //   .catch((error) => { if (error) console.log('AXIOS_ERROR', error); });

  i18n
    .use(initReactI18next)
    .init({
      lng: current,
      fallbackLng: {
        en: ['EN'],
        default: ['KO'],
      },
      resources: {
        DE: { translation: de },
        EN: { translation: en },
        JA: { translation: ja },
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

export function getLanguage() {
  return current;
}

export function changeLanguage(code: string) {
  i18n.changeLanguage(code, (error, t) => {
    if (error) console.log('changeLanguage', error);
    current = code;
  })
}

export const LANGUAGES = [
  { name: 'English', value: 'EN' },
  { name: '한국어', value: 'KO' },
  { name: '日本語', value: 'JA' },
  { name: 'Deutsch', value: 'DE' },
];