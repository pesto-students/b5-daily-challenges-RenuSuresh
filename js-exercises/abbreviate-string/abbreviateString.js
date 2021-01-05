import { isString } from "util";

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error();
  }
  const wordsInStr = str.split(" ");
  const numberOfWords = wordsInStr.length;
  const lastWordLetter = wordsInStr[numberOfWords - 1][0].toUpperCase();
  return `${wordsInString[0]} ${lastWordLetter}.`;
}

export { abbreviateString };
