// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// Precautions
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 45 > 7

// solution 1
// n을 3진법 문자열로 만든 후 (toString(3))
// 배열로 변환해 요소의 순서를 뒤짚는다. (reverse())
// 이후 다시 문자열로 만들고 (join(""))
// 그 문자열을 다시 10진법으로 (parseInt(문자열, 3))표현해 반환한다.
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
