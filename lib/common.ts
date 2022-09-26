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