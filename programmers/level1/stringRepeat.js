// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는
// 문자열을 리턴하는 함수, solution을 완성하세요.
// '예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

// Precautions
// n은 길이 10,000이하인 자연수입니다.

// solution 1
// 입력받은 자연수만큼 반복한다.
// 임의의 문자열에 홀수 번째 반복일 경우 "수"라는 문자열을 더하고
// 짝수 번째 반복일 경우 "박"이라는 문자열을 더하고 반환한다.
function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      result = result + "박";
    } else {
      result = result + "수";
    }
  }
  return result;
}

// solution 2
// "수박" 문자열을 입력받은 자연수만큼 반복한다.(repeat)
// substr(0, n)으로 0인덱스 부터 n개의 문자열을 반환한다.
function solution(n) {
  return "수박".repeat(n).substr(0, n);
}
