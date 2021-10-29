// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 
// 차례대로 담은 정수 배열 absolutes와 
// 이 정수들의 부호를 차례대로 담은 
// 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 
// solution 함수를 완성해주세요.

// Precautions
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 
// 그렇지 않으면 음수임을 의미합니다.

// Example
// [4,7,12] [true,false,true] 9
// [1,2,3] [false,false,true] 0

// solution 1
// absolutes 배열을 reduce로 누적하여
// 더하는 연산할때 해당 인덱스의 값으로 
// signs 배열의 원소를 확인하여 
// false일땐 -1을 true일때 1일 곱한 값으로
// 연산하여 반환한다.
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, inx) => acc + (cur * (signs[inx] ? 1 : -1)), 0)
}