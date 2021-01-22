// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해
// 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며,
// 대문자는 소문자보다 작은 것으로 간주합니다.

// Precautions
// str은 길이 1 이상인 문자열입니다.

// Examples
// "Zbcdefg" >> "gfedcbZ"

// solution 1
// 대소문자를 구별하기 위해
// 대문자만 담은 배열과 소문자만 담은 배열을 만든다.
// 각 배열을 sort하고 순서를 반전한다.
// 대문자 배열에 소문자 배열을 concat하고 문자열로 변환해 반환한다.
function solution(s) {
  let alpaSmall = s.match(/[a-z]/g).sort().reverse();
  let alpaBig = s.match(/[A-Z]/g).sort().reverse();
  return alpaSmall.concat(alpaBig).join("");
}

// solution 2
// 문자열을 배열로 변환 후 sort하고 순서를 반전하여
// 문자열로 변환해 반환한다
// (대소문자 구별 생략)
function solution(s) {
  return s.split("").sort().reverse().join("");
}
