// 1부터 입력받은 숫자 n 사이에 있는
// 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// Precautions
// n은 2이상 1000000이하의 자연수입니다.

// Examples
// 10 > 4
// 5 > 3

// solution 1
// 주어진 수만 큼의 길이를 가지고 모든 값은 true를 가진 배열을 만든다.
// 첫번째는 false를 할당한다.
// 2부터 n의 제곱근까지 반복하여 만난 수의 배수들을 false로 만든다.
// 최종으로 만들어진 배열의 요소중 true를 값으로 가진 요소만 개수를 새어 반환한다.
function solution(n) {
  const arr = new Array(n).fill(true);
  arr[0] = false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (arr[i - 1] === true) {
      for (let j = i * 2; j <= n; j += i) {
        arr[j - 1] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}
