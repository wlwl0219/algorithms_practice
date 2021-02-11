// 정수 n을 입력받아 n의 약수를 모두 더한 값을
// 리턴하는 함수, solution을 완성해주세요.

// Precautions
// n은 0 이상 3000이하인 정수입니다

// solution 1
// 1부터 n까지 반복하면서 그 수 중 n과 
// 나누어 지는 수를 누적하여 더하고 반환한다.
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result += i;
  }
  return result;
}

// solution 2
// n개의 길이를 가지고 1을 요소로 갖는 배열을 만든다.
// 그 배열의 요소가 1부터 n까지 요소를 갖는 배열로 만든다.
// 각 요소가 n과 나누어지면 누적하여 더하고 반환한다.
function solution(n) {
  return Array(n)
    .fill(1)
    .map((x, y) => x + y)
    .reduce((acc, cur) => (n % cur ? acc : (acc += cur)), 0);
}
