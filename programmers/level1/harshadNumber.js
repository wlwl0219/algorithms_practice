// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고,
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지
// 검사하는 함수, solution을 완성해주세요.

// Precautions
// x는 1 이상, 10000 이하인 정수입니다.

// solution 1
// 입력받은 정수의 자릿수 합을 구하기 위해
// 문자열, 그리고 배열로 변환 후 reduce로 자릿수 합을 구한다.
// 입력받은 정수와 그 자릿수를 나누어 나머지 값으로
// 반대되는 boolean값을 반환한다.(나머지가 0이면 true)

function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);
  return !(x % sum);
}
