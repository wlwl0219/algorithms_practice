// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로
// 읽었을 때의 문자열을 리턴해야 합니다.

// input
// factor1: arr
// string 타입을 요소로 갖는 배열

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

// Examples
// let input = [
//     'hello',
//     'wolrd',
//   ];
//   let output = readVertically(input);
//   console.log(output); // --> 'hweolllrod'
//   input = [
//     'hi',
//     'wolrd',
//   ];
//   output = readVertically(input);
//   console.log(output); // --> 'hwiolrd'

// solution 1
function readVertically(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (newArr.length === j) {
        newArr.push(str[j]);
      } else {
        newArr[j] = newArr[j] + str[j];
      }
    }
  }
  return newArr.join("");
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof readVertically(["hi"])).to.be.equal("string");
}

// 2.  ['hello', 'wolrd']을(를) 입력받은 경우, 'hweolllrod'을(를) 리턴해야 합니다
function test() {
  expect(readVertically(["hello", "wolrd"])).to.be.equal("hweolllrod");
}

// 3. ['YCDt', 'oao', 'unI']을(를) 입력받은 경우, 'YouCanDoIt'을(를) 리턴해야 합니다
function test() {
  expect(readVertically(["YCDt", "oao", "unI"])).to.be.equal("YouCanDoIt");
}

// 4. ['ABCDE', 'abcde', 'fghij']을(를) 입력받은 경우, 'AafBbgCchDdiEej'을(를) 리턴해야 합니다
function test() {
  expect(readVertically(["ABCDE", "abcde", "fghij"])).to.be.equal(
    "AafBbgCchDdiEej"
  );
}
