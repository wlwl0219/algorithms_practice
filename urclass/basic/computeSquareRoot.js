// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// input
// factor1: number 타입의 정수 (num >= 2)

// output
// number 타입을 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)

// Precautions
// Math.sqrt 사용은 금지됩니다.

// Examples
// let output = computeSquareRoot(9);
// console.log(output); // --> 3
// output = computeSquareRoot(6);
// console.log(output); // --> 2.45

// Hint
// 소수점 처리는 javascript 표준 내장 객체인 Number를 검색해 봅니다.
// (js decimal places limit 또는 자바스크립트 소수점 자리수)
// 항상 타입을 주의하여야 합니다.
// 각 자리수(1, 0.1, 0.01, 0.001)마다 (목표값을 넘지 않는)
// 근사값을 구하는 방식이 있습니다.
// 제곱근을 구하는 방법 중 바빌로니아 법이 있습니다.
// 바빌로니아 법의 점화식(recurrence formula)을 이해할 수 있다면,
// 해당 식을 이용해 문제를 풀어도 좋습니다.

// solution 1
function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) {
      base = base + diffs[i];
    }
    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2));
}

// test start
// 1. Math.sqrt 사용은 금지됩니다
function test() {
  computeSquareRoot(hiddenInput[0]);
  computeSquareRoot(hiddenInput[1]);
  computeSquareRoot(hiddenInput[2]);
  expect(Math.sqrt.called).to.be.equal(false);
}

// 2. number 타입을 리턴해야 합니다
function test() {
  expect(typeof computeSquareRoot(4)).to.be.equal("number");
}

// 3. 4을(를) 입력받은 경우, 2을(를) 리턴해야 합니다
function test() {
  expect(computeSquareRoot(4)).to.be.equal(2);
}

// 4. 9을(를) 입력받은 경우, 3을(를) 리턴해야 합니다
function test() {
  expect(computeSquareRoot(9)).to.be.equal(3);
}

// 5. 5을(를) 입력받은 경우, 2.24을(를) 리턴해야 합니다
function test() {
  expect(computeSquareRoot(5)).to.be.equal(2.24);
}

// 6. 6을(를) 입력받은 경우, 2.45을(를) 리턴해야 합니다
function test() {
  expect(computeSquareRoot(6)).to.be.equal(2.45);
}

// 7. 144을(를) 입력받은 경우, 12을(를) 리턴해야 합니다
function test() {
  expect(computeSquareRoot(144)).to.be.equal(12);
}
