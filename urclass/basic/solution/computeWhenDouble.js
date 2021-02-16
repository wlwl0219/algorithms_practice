// 연이율을 입력받아 원금이 2배 이상이 될 때까지
// 걸리는 시간(년)을 리턴해야 합니다.

// input
// factor1: number 타입의 연이율 (%)

// output
// number 타입을 리턴해야 합니다.

// Examples
// let output = computeWhenDouble(7);
// console.log(output); --> 11
// output = computeWhenDouble(10);
// console.log(output); --> 8

// solution 1
// TODO!!!!!!
// 만기시 금액=투자원금+(투자원금×이율×기간)
function computeWhenDouble(interestRate) {
  let rate = 1 + interestRate / 100;
  let principal = 1;
  let year = 0;

  while (principal < 2) {
    principal = principal * rate;
    year++;
  }
  return year;
}

// test start
// 1. number 타입을 리턴해야 합니다
function test() {
  expect(typeof computeWhenDouble(7)).to.be.equal("number");
}

// 2. 1을(를) 입력받은 경우, 70을(를) 리턴해야 합니다
function test() {
  expect(computeWhenDouble(1)).to.be.equal(70);
}

// 3. 2.3을(를) 입력받은 경우, 31을(를) 리턴해야 합니다
function test() {
  expect(computeWhenDouble(2.3)).to.be.equal(31);
}

// 4. 7을(를) 입력받은 경우, 11을(를) 리턴해야 합니다
function test() {
  expect(computeWhenDouble(7)).to.be.equal(11);
}

// 5. 100을(를) 입력받은 경우, 1을(를) 리턴해야 합니다
function test() {
  expect(computeWhenDouble(100)).to.be.equal(1);
}

// 6. 200을(를) 입력받은 경우, 1을(를) 리턴해야 합니다
function test() {
  expect(computeWhenDouble(200)).to.be.equal(1);
}
