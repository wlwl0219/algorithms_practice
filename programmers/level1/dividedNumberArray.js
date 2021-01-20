// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 
// 배열에 -1을 담아 반환하세요.

// Precautions
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// solution 1
// arr의 요소 하나씩 접근한다.
// 만난 요소가 divisor으로 나누어지면
// 임의의 배열에 그 요소를 넣어준다.
// 나누어진 요소가 하나도 없다면
// [-1]을 반환한다.
// 임의의 배열을 오름차순으로 정렬하여 반환한다.

function solution(arr, divisor) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  if (result.length === 0) {
    result.push(-1);
    return result;
  } else {
    return result.sort((a, b) => {
      return a - b;
    });
  }
}
