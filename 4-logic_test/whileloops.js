const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

console.log(anagram(input));

function anagram(inputArr) {
  let output = [[inputArr.shift()]];

  while (inputArr.length > 0) {
    let haveMatch = false;
    for (let i = 0; i < output.length; i++) {
      if (compare(output[i][0], inputArr[0])) {
        output[i].push(inputArr.shift());
        haveMatch = true;
        break;
      }
    }

    if (haveMatch) { continue };
    output.push([inputArr.shift()]);
  }

  return output;
}

function compare(a, b) {
  if (a.split("").sort().join("") === b.split("").sort().join("")) {
    return true;
  }
  return false;
}