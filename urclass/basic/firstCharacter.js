// 문자열을 입력받아 문자열을 구성하는 각 단어의
// 첫 글자로 이루어진 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 공백이 있는 알파벳 문자열

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백은 없다고 가정합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

// Examples
// let output = firstCharacter('hello world');
// console.log(output); --> "hw"
// output = firstCharacter(
//     'The community at Code States might be the biggest asset'
//   );
//   console.log(output); --> "TcaCSmbtba"

// solution 1
function firstCharacter(str) {
  let arr = str.split(" ");
  return arr.reduce((acc, cur) => {
    acc = acc + cur.substring(0, 1);
    return acc;
  }, "");
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof firstCharacter("hello world")).to.be.equal("string");
}

// 2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  expect(firstCharacter("")).to.be.equal("");
}

// 3. 'hello codestates'을(를) 입력받은 경우, 'hc'을(를) 리턴해야 합니다
function test() {
  expect(firstCharacter("hello codestates")).to.be.equal("hc");
}

// 4. 'Those who survive are strong'을(를) 입력받은 경우, 'Twsas'을(를) 리턴해야 합니다
function test() {
  expect(firstCharacter("Those who survive are strong")).to.be.equal("Twsas");
}

// 5. 'never give up you can do it'을(를) 입력받은 경우, 'nguycdi'을(를) 리턴해야 합니다
function test() {
  expect(firstCharacter("never give up you can do it")).to.be.equal("nguycdi");
}
