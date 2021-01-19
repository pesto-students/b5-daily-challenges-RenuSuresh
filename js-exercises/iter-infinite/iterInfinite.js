function* count(start, step = 1) {
  while (true) {
    yield (start += step);
  }
}

function* cycle(iter, n) {
  if (n === undefined) {
    while (true) {
      for (const el of iter) {
        yield el;
      }
    }
  } else {
    while (n > 0) {
      for (const el of iter) {
        yield el;
      }
      n--;
    }
  }
}

function* repeat(value, n) {
  if (n) {
    while (n > 0) {
      yield value;
      n--;
    }
  } else {
    while (true) {
      yield value;
    }
  }
}
export { count, cycle, repeat };
