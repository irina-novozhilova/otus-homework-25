export function sum(...args: number[]): any {
  let curSum: number = args[0] ? args[0] : 0;

  const f = function plus(n: number) {
    curSum += n;
    return f;
  };

  f.toString = () => curSum.toString();

  return f;
}
