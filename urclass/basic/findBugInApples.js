// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아
// 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// input
// factor1: arr
// 배열을 요소로 갖는 배열
// arr[i]는 'A' 또는 'B'만을 요소로 갖는 배열

// output
// 'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 차례대로 행, 열입니다. ([행, 열])
// 행: 'B'를 요소로 갖는 배열 arr[i]의 인덱스 i
// 열: arr[i]에서 'B'(arr[i][j])의 인덱스 j

// Precautions
// arr, arr[i]의 길이는 다양하게 주어집니다.
// 항상 한 개의 문자열 'B'가 존재합니다.

// Examples
// let output = findBugInApples([['A'], ['B']]);
// console.log(output); //[1, 0]
// output = findBugInApples([
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'B', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
// ]);
// console.log(output); //[1, 1]

// solution 1
function findBugInApples(arr) {
  return arr.reduce((acc, cur, inx) => {
    if (cur.includes("B")) {
      acc.push(inx);
      acc.push(cur.indexOf("B"));
    }
    return acc;
  }, []);
}

// test start
//1. 배열을 리턴해야 합니다
function test() {
  expect(Array.isArray(findBugInApples([["B"]]))).to.be.true;
}

// 2. [['B']]을(를) 입력받은 경우, [0, 0]을(를) 리턴해야 합니다
function test() {
  expect(findBugInApples([["B"]])).to.deep.equal([0, 0]);
}

// 3. [['A','A'], ['B','A']]을(를) 입력받은 경우, [1, 0]을(를) 리턴해야 합니다
function test() {
  expect(
    findBugInApples([
      ["A", "A"],
      ["B", "A"],
    ])
  ).to.deep.equal([1, 0]);
}

// 4. [['A','A'], ['A','A'], ['A','A','A',B']]을(를) 입력받은 경우, [2, 3]을(를) 리턴해야 합니다
function test() {
  expect(
    findBugInApples([
      ["A", "A"],
      ["A", "A"],
      ["A", "A", "A", "B"],
    ])
  ).to.deep.equal([2, 3]);
}
