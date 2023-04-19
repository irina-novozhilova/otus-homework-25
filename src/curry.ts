export function curry(
  f: (...args: number[]) => number
): (...args: number[]) => any {
  return function curried(...args: number[]) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    }
    return function curryResult(...args2: number[]) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
