// 자연수 n이 매개변수로 주어집니다. 
// n을 x로 나눈 나머지가 1이 되도록 하는 
// 가장 작은 자연수 x를 return 하도록 
// solution 함수를 완성해주세요. 

// Precautions
// 3 ≤ n ≤ 1,000,000

// Example
// 10 > 3
// 12 > 11

// solution 1
// 1을 제외한 2부터 반복문을 만든다.
// n을 i로 나누어 나머지가 1이 된다면
// 반환한다.
function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i
        }
    }
}