// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 [sun, bed, car]이고 n이 1이면
// 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

// Precautions
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우,
// 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// solution 1
// sort를 통해 String.localeCompare을 사용하여
// 정렬 순서를 정의하는 함수를 작성한다.
// 문자열의 인덱스n이 비교 대상과 같다면 문자열로 비교하고
// 같지 않다면 문자열의 인덱스n으로 비교하여 정렬한다.

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
