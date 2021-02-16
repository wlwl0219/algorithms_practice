// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// input
// factor1: number 타입의 정수 (num >= 1)

// output
// boolean 타입을 리턴해야 합니다.

// Precautions
// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

// Examples
// let output1 = powerOfTwo(16);
// console.log(output1); -> true
// let output2 = powerOfTwo(22);
// console.log(output2); -> false

// solution 1
// num을 2로 나눈다.
// 나머지가 0이 아니면 false;
// 나머지가 0이면 true;
// num이 1이 되면 반복을 멈춘다.

function powerOfTwo(num) {
  while (1 < num) {
    if (num % 2) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

// test start
// 1. Number.isInteger, Math.log2, Math.log 사용은 금지됩니다
function test() {
  powerOfTwo(hiddenInput[0]);
  powerOfTwo(hiddenInput[1]);
  powerOfTwo(hiddenInput[2]);
  expect(Number.isInteger.called).to.be.equal(false);
  expect(Math.log.called).to.be.equal(false);
  expect(Math.log2.called).to.be.equal(false);
}

// 2. 반복문(while)을 사용해야 합니다
function test() {
  expect(FOR_LOOP_EXP.test(funcBody)).to.be.equal(false);
  expect(WHILE_LOOP_EXP.test(funcBody)).to.be.equal(true);
}

// 3. boolean 타입을 리턴해야 합니다
function test() {
  expect(typeof powerOfTwo(302)).to.be.equal("boolean");
}

// 4. 1을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(powerOfTwo(1)).to.be.true;
}

// 5. 32을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(powerOfTwo(32)).to.be.true;
}

// 6. 100을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(powerOfTwo(100)).to.be.false;
}

// 7. 997을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(powerOfTwo(997)).to.be.false;
}

// 8. 36028797018964을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(powerOfTwo(36028797018964)).to.be.false;
}

// 9. 36028797018963970을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(powerOfTwo(36028797018963970)).to.be.true;
}

// 10. 18446744073709551616을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(powerOfTwo(18446744073709551616)).to.be.true;
}
