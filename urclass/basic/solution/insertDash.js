// 문자열을 입력받아 연속된 한자리 홀수 숫자
// 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 숫자 문자열

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 0은 짝수로 간주합니다.

// Examples
// let output = insertDash('454793');
// console.log(output); --> 4547-9-3

// solution 1
// 입력받은 문자열을 하나씩 요소로 하는 배열을 만든다.
// 반복문으로 배열의 요소 하나씩 접근한다.
// 만난 요소의 숫자가 홀수(arr[i] % 2 === 1)이고 i+1 요소의 숫자도 홀수 일때
// spilce(i+1, 0, "-")을 반복한다.
// 그렇게 만든 배열을 다시 문자열로 변환(join)하여 반환한다.
function insertDash(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      arr.splice(i + 1, 0, "-");
    }
  }
  return arr.join("");
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof insertDash("02189")).to.be.equal("string");
}

// 2. '2'을(를) 입력받은 경우, '2'을(를) 리턴해야 합니다
function test() {
  expect(insertDash("2")).to.be.equal("2");
}

// 3. '02189'을(를) 입력받은 경우, '02189'을(를) 리턴해야 합니다
function test() {
  expect(insertDash("02189")).to.be.equal("02189");
}

// 4. '0364649584527734248497490956436424513856401903589'을(를) 입력받은 경우, '0364649-584527-7-3424849-74909-564364245-1-3856401-903-589'을(를) 리턴해야 합니다
function test() {
  expect(
    insertDash("0364649584527734248497490956436424513856401903589")
  ).to.be.equal("0364649-584527-7-3424849-74909-564364245-1-3856401-903-589");
}

// 5. '6734611997679419173'을(를) 입력받은 경우, '67-3461-1-9-9-767-941-9-1-7-3'을(를) 리턴해야 합니다
function test() {
  expect(insertDash("6734611997679419173")).to.be.equal(
    "67-3461-1-9-9-767-941-9-1-7-3"
  );
}
