const checkParam = (elem) => {
  if (isNaN(elem)) {
    throw new TypeError(`${elem} is not Number`);
  }
};

function rangeIter(lb, ub) {
  checkParam(lb);
  checkParam(ub);
  const iterable = {
    // when iterator that are iterable
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (lb <= ub) {
        return { value: lb++, done: false };
      }
      return { done: true };
    },
  };
  return iterable;
}

export { rangeIter };
