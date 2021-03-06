// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서
// 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다.
// z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아
// s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// Precautions
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// solution 1
// 입력받은 문자열을 배열로 만든다.
// map으로 알파벳 하나씩 접근한다.
// 만난 요소가 공백이면 공백을 그대로 반환한다.
// 만난 요소가 알파벳이면 대문자로 변환 후 아스키코드 값에 n을 더한다.
// 그 값이 90(Z)을 넘어가면 - 26을 하고 다시 알파벳으로 반환한다.
// 그 값이 90(Z)을 넘어가지 않는 다면 다시 알파벳으로 반환한다.
// 그렇게 재구성된 배열을 다시 문자열로 변환해 반환한다.
function solution(s, n) {
  return s
    .split("")
    .map(e => {
      if (" " == e) return e;
      return e.toUpperCase().charCodeAt(0) + n > 90
        ? String.fromCharCode(e.charCodeAt(0) + n - 26)
        : String.fromCharCode(e.charCodeAt(0) + n);
    })
    .join("");
}
