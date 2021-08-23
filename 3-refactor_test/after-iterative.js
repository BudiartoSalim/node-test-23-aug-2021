const word = 'ini(stringloh)'

console.log(findFirstStringInBracket(word))

function findFirstStringInBracket(str) {
  const arr = [];
  let recording = false;
  for (let i = 0; i < str.length; i++) {
    if (recording && str[i] === ")") { break; };
    if (recording) { arr.push(str[i]) };
    if (!recording && str[i] === "(") { recording = true };
  }
  return arr.join("");
}