// 프로그래머스 모바일은 개인정보 보호를 위해
// 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린
// 문자열을 리턴하는 함수, solution을 완성해주세요.

// Precautions
// s는 길이 4 이상, 20이하인 문자열입니다.

// solution 1
// 입력받은 문자열의 4자리를 제외한 길이만큼 *이 있는 문자열을 만든다.
// *문자열과 입력받은 문자열의 끝 4자리와 합친다.
function solution(phone_number) {
  let str = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    str = str + "*";
  }
  return str + phone_number.slice(-4);
}

// solution 2
// *문자열을 반복해 만들기 위해 repeat를 이용한다.
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
