const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

function primeFn(num) {
  const primeIterable = {
    [Symbol.iterator]() {
      let i = 0;
      let sum = 0;
      return {
        next() {
          if (i > num) {
            return { done: true };
          }
          if (isPrime(i)) {
            sum = i;
            i++;
            return { value: sum, done: false };
          } else {
            i++;
            return { done: false, value: 0 };
          }
        },
      };
    },
  };
  return primeIterable;
}

function sumPrimes(num) {
  const sum = [...primeFn(num)].reduce((a, b) => a + b, 0);
  return sum;
}

export { sumPrimes };
