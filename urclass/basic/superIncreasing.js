// 수를 요소로 갖는 배열을 입력받아 각 요소들이
// 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

// input
// factor1: arr
// 수를 요소로 갖는 배열
// arr[i]는 정수

// output
// boolean 타입을 리턴해야 합니다.
// arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

// Examples
// let output = superIncreasing([1, 3, 6, 13, 54]);
// console.log(output); // --> true
// output = superIncreasing([1, 3, 5, 9]);
// console.log(output); // --> false

// solution 1
// 첫번째 요소를 누적값으로 할당한다.
// 입력받은 배열의 두번쩨 요소 (arr[1]) 부터 하나씩 접근한다.
// 이후 누적값과 다음 요소를 비교
// 누적값이 더 크거나 같다면 false를 반환
// 누적값이 더 작다면 누적값과 다음 요소를 더한다.
// 반복문이 끝날 때 까지 false가 반환되지 않으면 true를 반환한다.
function superIncreasing(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum = sum + arr[i];
  }
  return true;
}

// test start
// 1. boolean 타입을 리턴해야 합니다
function test() {
  expect(typeof superIncreasing([1, 4, 6, 34])).to.be.eql("boolean");
}

// 2. [1, 2, 4, 8, 15]을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(superIncreasing([1, 2, 4, 8, 15])).to.be.false;
}

// 3. [979, 1737, -2146, -337, 1316]을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(superIncreasing([979, 1737, -2146, -337, 1316])).to.be.false;
}

// 4. [-2247, 1093, 1064]을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(superIncreasing([-2247, 1093, 1064])).to.be.true;
}

// 5. [612, 1226]을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(superIncreasing([612, 1226])).to.be.true;
}

// 6. [-2123, 843, -733, 1156, -919]을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(superIncreasing([-2123, 843, -733, 1156, -919])).to.be.false;
}

// 7. [2456, -826, 32, 553, -1346, 376, 1969, -47]을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(superIncreasing([2456, -826, 32, 553, -1346, 376, 1969, -47])).to.be
    .false;
}
