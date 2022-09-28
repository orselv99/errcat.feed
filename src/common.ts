import { Cookies } from 'react-cookie';

const cookies = new Cookies();
export function getCookie(name: string) {
  return cookies.get(name);
}

export function setCookie(name: string, value: any) {
  return cookies.set(name, value);
}

export function makeUnitString(source: number) {
  let calc = source;
  if (source > 1000) {
    calc = source / 1000;
    return `${calc.toFixed(1)}k`;
  } else {
    calc = Math.round(calc);
  }

  return calc.toString();
}

export function convertDate(source: number) {
  return new Date(source).toUTCString();
}

export interface Result {
  code: number;
  data?: any;
}

