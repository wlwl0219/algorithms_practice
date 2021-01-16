// 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다.
// 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// input
// factor1: string 타입의 공백이 없는 알파벳 문자열

// output
// boolean 타입을 리턴해야 합니다.

// Precautions
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
// 대소문자는 구별하지 않습니다.

// Examples
// let output = isIsogram('aba');
// console.log(output); // false
// output = isIsogram('Dermatoglyphics');
// console.log(output); // true

// solution 1
// 대소문자를 구별하지 않기 위해 모두 소문자로 바꾼다.
// 바꾼 문자열을 배열로 바꾼다.
// 배열의 요소 하나씩 접근한다.
// 만난 요소 이후부터 포함된 새로운 배열을 만든다.
// 새로운 배열에 만난 오소가 포함되어 있으면 false를 반환한다.
// 배열의 모든 요소에 접근했다면 true를 반환한다.
function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(i + 1);
    if (newArr.includes(arr[i])) {
      return false;
    }
  }
  return true;
}

// test start
// 1. boolean 타입을 리턴해야 합니다
function test() {
  expect(typeof isIsogram("sNJiYh")).to.be.equal("boolean");
}

// 2. 빈 문자열을 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(isIsogram("")).to.be.true;
}

// 3. 'iCanDo'을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(isIsogram("iCanDo")).to.be.true;
}

// 4. 'uncopyrightable'을(를) 입력받은 경우, true를 리턴해야 합니다
function test() {
  expect(isIsogram("uncopyrightable")).to.be.true;
}

// 5. 'dropOut'을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(isIsogram("dropOut")).to.be.false;
}

// 6. 'abandonment'을(를) 입력받은 경우, false를 리턴해야 합니다
function test() {
  expect(isIsogram("abandonment")).to.be.false;
}
