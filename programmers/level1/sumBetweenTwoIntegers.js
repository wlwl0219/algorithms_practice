// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한
// 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// Precautions
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// solution 1
// 입력받은 수중 작은 수부터 큰 수까지
// 반복하며 임의의 변수에 누적하여 더한다.
// 반복문을 마치면 누적하여 더한 값을 반환한다.
function solution(a, b) {
  let result = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result = result + i;
  }
  return result;
}

// solution 2
// 등차수열의 합 (b > a)
// (a + b) * (b - a + 1) / 2
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
