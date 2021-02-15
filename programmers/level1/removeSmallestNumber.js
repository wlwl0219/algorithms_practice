// 정수를 저장한 배열, arr 에서 가장 작은 수를
// 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// Precautions
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// solution 1
// Spread syntax로 전달하여 최소값을 얻는다.
// indexOf로 최소값의 인덱스를 찾는다.
// splice로 배열에서 최소값을 갖는 요소만 제거한다.
// 배열의 길이가 있다면 제거된 배열을 반환하고
// 배열의 길이가 0이라면 [-1]을 반환한다.
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}
