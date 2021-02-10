// 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// Precautions
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// solution 1
// 리턴할 임의의 배열을 만든다.
// 입력받은 n개를 지닌 배열을 만들기 위해 n번만큼 반복한다.
// 배열에 순차적으로 입력받은 x부터 x만큼 증가한 요소를 할당하고 반환한다.
function solution(x, n) {
  let arr = [];
  let up = x;
  for (let i = 0; i < n; i++) {
    arr[i] = x;
    x = x + up;
  }
  return arr;
}

// solution 2
// 모두 x를 요소로 갖는 n개의 길이를 가진 배열을 만든다.
// 그 배열의 요소들을 순차적으로 (인덱스 + 1) * x의 값으로
// 만들어 반환한다.
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
