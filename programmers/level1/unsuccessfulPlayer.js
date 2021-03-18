// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// Precautions
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// Example
// ["mislav", "stanko", "mislav", "ana"] ["stanko", "ana", "mislav"]
// "mislav"

// solution 1
// 시간 복잡도를 고려하기 위해 sort함수를 사용하여
// 받은 두개의 배열을 정렬한다.
// 두 배열을 같은 인덱스 끼리 비교하여 같지 않으면
// 그 요소를 반환다.
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// solution 2
// 1번 솔루션과 동일하게 sort함수로 우선 정렬한다.
// find함수를 사용하여 참가 선수 배열의 요소중
// 완주한 배열의 요소와 일치 하지 않는 첫번째 요소를 반환한다.
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.find((ele, inx) => ele !== completion[inx]);
}
