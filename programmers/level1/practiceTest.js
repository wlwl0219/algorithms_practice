// 수포자는 수학을 포기한 사람의 준말입니다.
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은
// 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이
// 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
// 1번수포자: 1,2,3,4,5 반복
// 2번수포자: 2,1,2,3,2,4,2,5 반복
// 3번수포자: 3,3,1,1,2,2,4,4,5,5 반복

// Precautions
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

// solution 1
// 수포자들의 답안을 담은 배열을 각각 만든다.
// 정답과 각 수포자들의 답안을 비교해서 맞힌 갯수를 구한다.
// 가장 많이 맞힌 사람이 2이상일 경우 오름차순으로 나열하기 위해
// 수포자1부터 mac일경우 순차적으로 push하고 
// 그 결과를 담은 배열을 반환한다.
function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let person1 = answers.filter((ele, inx) => ele === one[inx % one.length])
    .length;
  let person2 = answers.filter((ele, inx) => ele === two[inx % two.length])
    .length;
  let person3 = answers.filter((ele, inx) => ele === three[inx % three.length])
    .length;
  let max = Math.max(person1, person2, person3);

  let result = [];
  if (max === person1) {
    result.push(1);
  }
  if (max === person2) {
    result.push(2);
  }
  if (max === person3) {
    result.push(3);
  }
  return result;
}
