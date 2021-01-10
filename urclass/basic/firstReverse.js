// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 문자열

// output
// string 타입을 리턴해야 합니다.

// Examples
// let output = firstReverse('codestates');
// console.log(output); --> "setatsedoc"
// output = firstReverse('I love codestates');
// console.log(output); --> "setatsedoc evol I"

function firstReverse(str) {
  return str.split("").reverse().join("");
}

// solution 1
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof firstReverse("hello")).to.be.eql("string");
}

// 2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  let input = "";
  expect(firstReverse(input)).to.be.eql("");
}

// 3. 'setats edoc'을(를) 입력받은 경우, 'code states'을(를) 리턴해야 합니다
function test() {
  expect(firstReverse("setats edoc")).to.be.eql("code states");
}

// 4. 'ti od nac uoy'을(를) 입력받은 경우, 'you can do it'을(를) 리턴해야 합니다
function test() {
  expect(firstReverse("ti od nac uoy")).to.be.eql("you can do it");
}

// 5. 'reenigne erawtfos taerg a eb lliw uoy'을(를) 입력받은 경우,
// 'you will be a great software engineer'을(를) 리턴해야 합니다
function test() {
  expect(firstReverse("reenigne erawtfos taerg a eb lliw uoy")).to.be.eql(
    "you will be a great software engineer"
  );
}
