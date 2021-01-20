// const curry = fn => a => b => fn(a,b);

const curry = (fn) => {
  const curried = (...firstArg) => {
    if (fn.length === firstArg.length) {
      return fn.apply(this, firstArg);
    }
    return function (...nextArg) {
      return curried.apply(this, firstArg.concat(nextArg));
    };
  };
  return curried;
};
export { curry };
