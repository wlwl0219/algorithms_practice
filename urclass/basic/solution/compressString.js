// 문자열을 입력받아 연속되는 문자가 있을 경우,
// 연속 구간을 반복되는 수와 문자로 조합한
// 형태로 압축한 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 알파벳 문자열

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

// Examples
// let output = compressString('wwwggoppopppp');
// console.log(output); // --> 3wggoppo4p

// solution 1
const compressString = str => {
  let before = str[0];
  let count = 1;
  let result = "";
  str = str + " ";

  for (let i = 1; i < str.length; i++) {
    if (before === str[i]) {
      count++;
    } else {
      if (count >= 3) {
        result = result + count + before;
      } else {
        result = result + before.repeat(count);
      }
      before = str[i];
      count = 1;
    }
  }
  return result;
};

module.exports = compressString;

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof compressString("WWGGOOPP")).to.be.eql("string");
}

// 2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  expect(compressString("")).to.be.eql("");
}

// 3. "wwwggopp"을(를) 입력받은 경우, "3wggopp"을(를) 리턴해야 합니다
function test() {
  expect(compressString("wwwggopp")).to.be.eql("3wggopp");
}

// 4. "EQTWVOQQQVDVRC"을(를) 입력받은 경우, "EQTWVO3QVDVRC"을(를) 리턴해야 합니다
function test() {
  expect(compressString("EQTWVOQQQVDVRC")).to.deep.equal("EQTWVO3QVDVRC");
}

// 5. "dsafdasfffffsgaaaaabbbscccdd"을(를) 입력받은 경우, "dsafdas5fsg5a3bs3cdd"을(를) 리턴해야 합니다
function test() {
  expect(compressString("dsafdasfffffsgaaaaabbbscccdd")).to.deep.equal(
    "dsafdas5fsg5a3bs3cdd"
  );
}
