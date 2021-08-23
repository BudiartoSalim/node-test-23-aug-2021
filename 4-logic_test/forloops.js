const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

console.log(anagram(input));

function anagram(inputArr) {
  let arr = [];
  for (let i = 0; i < inputArr.length; i++) {
    arr[i] = { val: inputArr[i], letters: inputArr[i].split("").sort().join("") };
  }

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].letters]) { obj[arr[i].letters] = [] };
    obj[arr[i].letters].push(arr[i].val);
  }
  console.log(obj)
  let output = [];
  for (const property in obj) {
    output.push(obj[property]);
  }

  return output;
}