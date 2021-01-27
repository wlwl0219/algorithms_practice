// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// Precautions
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// solution 1
// 입력받은 문자열을 모두 소문자로 변환 후
// 문자열 하나씩을 요소로 같는 배열을 만든다.
// 그 배열에서 "p" 혹은 "y" 요소만 이루어진 배열을 각각 만든다.
// 각 filter로 만든 배열들의 길이가 같으면 true, 아니면 false를 반환한다.
function solution(s) {
  let arr = s.toLowerCase().split("");
  return (
    arr.filter((ele) => ele === "p").length ===
    arr.filter((ele) => ele === "y").length
  );
}

// solution 2
// 입력받은 문자열을 대문자로 변환 후
// "P"나 "Y" 기준으로 나누어 배열로 변환한다.
// 변환한 각 배열의 길이가 같은면 true, 아니면 false를 반환한다.
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
