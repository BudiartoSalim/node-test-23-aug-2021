const word = 'ini(stringloh)'

console.log(findFirstStringInBracket(word))

function findFirstStringInBracket(str, isRecording = false) {
  if (!str || str[0] === ")") { return "" };
  const nextWord = str.split("");
  const currentLetter = nextWord.shift();
  if (isRecording) { return currentLetter + findFirstStringInBracket(nextWord.join(""), isRecording) };
  if (!isRecording && currentLetter === "(") { isRecording = true };
  return "" + findFirstStringInBracket(nextWord.join(""), isRecording);
}