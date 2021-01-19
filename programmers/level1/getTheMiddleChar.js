// 단어 s의 가운데 글자를 반환하는 함수,
// solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// Precautions
// s는 길이가 1 이상, 100이하인 스트링입니다.

// Examples
// "abcde" > "c"
// "qwer" > "we"

// solution 1
// 입력 받은 문자열 길이(length)를 구한다.
// length를 2로 나누어 같거나 작은 정수(index)를 구한다.
// length가 짝수이면 index - 1 + index에 해당하는 문자열을 반환한다.
// length가 홀수이면 index에 해당하는 문자열을 반환한다.
function solution(s) {
  let length = s.length;
  let index = Math.floor(length / 2);
  return length % 2 === 0 ? s[index - 1] + s[index] : s[index];
}

// solution 2
// String.prototype.substr()을 활용하여
// 해당 함수의 첫번째 인자에 문자열의 길이를 2로
// 나눈값을 가까운 정수로 올림한 수에 1를 뺀 값으로 설정한다.
// (추출하고자 하는 문자들의 시작위치)
// 두번째 인자에는 문자열의 길이가 짝수일 경우 2, 홀수일 경우 1을 설정한다.
// (추출할 문자들의 총 갯수)
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
