// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 
// 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 
// solution 함수를 완성해주세요.

// Precautions
// 1 ≤ left ≤ right ≤ 1,000

// Example
// left right result
// 13   17	   43
// 24   27	   52

// solution 1
// 결과를 담을 변수 result를 만든다.
// left부터 right까지의 반복문을 만든다.
// 특정 수의 약수개수를 담을 count 변수를 만들고
// 1부터 특정수까지 반복하며 약수일때 count에 1을 더한다.
// result 변수에 그렇게 나온 약수의 개수가 홀수일시 빼고
// 짝수일시 더하며 누적 계산 후 반환한다.
function solution(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++){
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++
            }
        }
        result = count % 2 ? result-i : result+i
    }
    return result
}

// solution 2
// left부터 right까지의 반복문을 만든다.
// 특정 수의 제곱근이 정수이면
// 약수의 개수가 홀수이고 아니면 짝수이다.
// 결과를 담을 변수에 홀수 일시 빼고
// 짝수일시 더하며 누적 계산 후 반환한다.
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}