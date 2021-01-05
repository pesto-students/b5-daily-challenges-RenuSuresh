function duplicateLetters(arg) {
  const assending = arg.split("").sort().join("");
  let maxCount = 0;
  for (let start = 0, end = 1; end < arg.length; ) {
    if (assending[start] == assending[end]) {
      if (maxCount < end - start + 1) {
        maxCount = end - start + 1;
      }
      end++;
    } else {
      start = end;
    }
  }
  if (maxCount > 1) {
    return maxCount;
  } else {
    return false;
  }
}

export { duplicateLetters };
