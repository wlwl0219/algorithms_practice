// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는
// 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
// 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// Precautions
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// solution 1
// 입력 받은 numbers의 원소에 순차적으로 접근하여
// 접근한 원소와 그 다음에 있는 원소를 더한 값을
// 임의의 배열(arr) 넣는다.
// 그렇게 만들어진 arr를 중복된 원소를 제거 하기위해
// set객체로 만든 후 다시 배열(result)로 만든다.
// result를 sort함수를 이용해 오름차순으로 나열 후 반환한다.
function solution(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  const result = [...new Set(arr)];
  return result.sort((a, b) => a - b);
}
