// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

// input
// factor1: string 타입의 알파벳 문자열

// output
// boolean 타입을 리턴해야 합니다.

// Precautions
// 대소문자를 구분하지 않습니다.
// 공백도 한 글자로 취급합니다.
// 'a'와 'b'는 중복해서 등장할 수 있습니다.

// Examples
// let output = ABCheck('lane Borrowed');
// console.log(output);  --> true

// solution 1
// 대소문자를 구분하지 않기 위해 문자열 모두 소문자로 변환한다.
// 반복문으로 문자열의 요소 하나씩 접근한다.
// 만난 요소의 소문자가 a일 경우 그 인덱스의 +4가 b이면 true를 반환
// 만난 요소의 소문자가 b일 경우 그 인덱스의 +4가 a이면 true를 반환
const ABCheck = str => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }
  }
  return false;
};

module.exports = ABCheck;
