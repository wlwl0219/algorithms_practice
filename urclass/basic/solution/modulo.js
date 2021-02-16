// 두 수(num1, num2)를 입력받아, num1를 num2로
// 나눈 나머지를 리턴해야 합니다.

// input
// factor1: num1
// number 타입의 정수 (num1 >= 0)
// factor2: num2
// number 타입의 정수 (num2 >= 0)

// output
// number 타입을 리턴해야 합니다.

// Precautions
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 어떤 수로 나누어도 나머지가 0입니다.
// 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

// Examples
// let output = modulo(25, 4);
// console.log(output); // --> 1

// solution 1
// num2가 0이라면 특정 문자열을 반환한다.
// num1이 num2보다 크거나 같다면
// num1에서 num2를 뺀 값을 num1에 할당한다.
// num1이 num2보다 작다면 num1을 출력한다.
function modulo(num1, num2) {
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }

  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1;
}

// test start
// 1. 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다
function test() {
  expect(/\/|%/g.test(funcBody)).to.be.equal(false);
}

// 2. number 타입을 리턴해야 합니다
function test() {
  expect(typeof modulo(8, 2)).to.be.equal("number");
}

// 3. 차례대로 0, 4을(를) 입력받은 경우, 0을(를) 리턴해야 합니다
function test() {
  expect(modulo(0, 4)).to.be.equal(0);
}

// 4. 차례대로 4, 0을(를) 입력받은 경우, 'Error: cannot divide by zero'을(를) 리턴해야 합니다
function test() {
  expect(modulo(4, 0)).to.be.equal("Error: cannot divide by zero");
}

// 5. 차례대로 4, 4을(를) 입력받은 경우, 0을(를) 리턴해야 합니다
function test() {
  expect(modulo(4, 4)).to.be.equal(0);
}

// 6. 차례대로 123, 4을(를) 입력받은 경우, 3을(를) 리턴해야 합니다
function test() {
  expect(modulo(123, 4)).to.be.equal(3);
}

// 7. 차례대로 123456789, 67을(를) 입력받은 경우, 43을(를) 리턴해야 합니다
function test() {
  expect(modulo(123456789, 67)).to.be.equal(43);
}
