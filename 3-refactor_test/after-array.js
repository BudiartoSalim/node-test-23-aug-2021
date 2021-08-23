const word = 'ini(string(loh)';

console.log(findFirstStringInBracket(word))

function findFirstStringInBracket(str) {
  const arr = str.split("");
  return arr.slice(arr.indexOf("(") + 1, arr.indexOf(")")).join("");
}