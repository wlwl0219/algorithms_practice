// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과
// 가장 긴 문자열을 제거한 배열을 리턴해야 합니다

// input
// factor1: arr
// string 타입을 요소로 갖는 배열
// arr[i].length는 20 이하

// output
// 배열을 리턴해야 합니다.

// Precautions
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

// Examples
// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); --> ['a', 'b']
// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); --> ['where', 'the', 'word',]

// solution 1
// 배열의 요소 하나씩 접근한다.
// 만난 요소의 길이가 0 보다 크거나 같으면
// maxLength에 그 요소의 길이값을 할당한다.
// maxIndex에 그 요소의 인덱스값을 할당한다.
// 만난 요소의 길이가 20 보다 작거나 같으면
// minLength 그 요소의 길이값을 할당한다.
// minIndex 그 요소의 인덱스값을 할당한다.
// 만난 요소의 인덱스가 maxIndex와 minIndex와 같지 않으면
// 새로운 배열에 그 요소들을 넣고 반환한다.

function removeExtremes(arr) {
  let maxLength = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxLength) {
      maxLength = arr[i].length;
      maxIndex = i;
    }
  }

  let minLength = 20;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= minLength) {
      minLength = arr[i].length;
      minIndex = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex && i !== minIndex) {
      result.push(arr[i]);
    }
  }
  return result;
}

// test start
// 1. 배열을 리턴해야 합니다
function test() {
  expect(Array.isArray(removeExtremes(["a", "c", "def"]))).to.be.true;
}

// 2. ['a', 'c', 'def']를 입력받은 경우, ['a']를 리턴해야 합니다
function test() {
  expect(removeExtremes(["a", "c", "def"])).to.deep.equal(["a"]);
}

// 3. ['where', 'is', 'the', 'longest', 'word']를 입력받은 경우, ['where', 'the', 'word']를 리턴해야 합니다
function test() {
  expect(
    removeExtremes(["where", "is", "the", "longest", "word"])
  ).to.deep.equal(["where", "the", "word"]);
}

// 4. ['iAmLongest', 'iAmNotShortest', 'iAmLongest', 'long']를 입력받은 경우, ['iAmLongest', 'iAmLongest']를 리턴해야 합니다
function test() {
  expect(
    removeExtremes(["iAmLongest", "iAmNotShortest", "iAmLongest", "long"])
  ).to.deep.equal(["iAmLongest", "iAmLongest"]);
}
