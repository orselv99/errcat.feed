export function makeUnitString(source: number) {
  let calc = source;
  if (source > 1000) {
    calc = source / 1000;
    return `${calc.toFixed(1)}k`;
  }
  else {
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