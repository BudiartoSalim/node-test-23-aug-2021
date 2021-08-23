const word = 'ini(string)l(oh)'

console.log(findFirstStringInBracket(word))

function findFirstStringInBracket(str) {
  const output = "" + (str.match(/\(+[^\)]+\)/) || "");
  return output.split("").slice(1, -1).join("");
}