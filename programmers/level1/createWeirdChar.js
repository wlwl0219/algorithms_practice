// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은
// 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// Precautions
// 문자열 전체의 짝/홀수 인덱스가 아니라,
// 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// solution 1
// 입력받은 문자열을 공백을 기준으로 배열로 만든다.
// map으로 단어별로 접근한다.
// 각 단어의 문자열을 배열로 만든 후 map으로 알파벳 하나씩 접근한다.
// 만난 알파벳이 그 단어배열의 짝수 인덱스라면 대문자로
// 홀수 인덱스라면 소문자로 변환 후 단어 배열을 다시 문자열로 변환 한다.
// 각 단어들이 포함된 배열을 공백을 기준으로 문자열로 변환 후 반환한다. 
function solution(s) {
  return s
    .split(" ")
    .map(e => {
      return e
        .split("")
        .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
        .join("");
    })
    .join(" ");
}
