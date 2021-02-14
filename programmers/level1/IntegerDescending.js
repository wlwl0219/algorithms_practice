// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// Precautions
// n은 1이상 8000000000 이하인 자연수입니다.

// solution 1
// n을 문자열로 바꾸고 각 자릿수를 요소로 같는 배열로 변환한다.
// 그 요소를 내림차순으로 정렬 후 문자열로 바꾸고 정수롤 변환해 반환한다.
function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
