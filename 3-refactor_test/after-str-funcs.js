const word = 'ini(string(loh)'

console.log(findFirstStringInBracket(word))

function findFirstStringInBracket(str) {
  return "" + str.substr(
    str.indexOf("(") + 1,
    str.indexOf(")") - (str.indexOf("(") + 1)
  )
}