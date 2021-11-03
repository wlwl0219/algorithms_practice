// 0부터 9까지의 숫자 중 일부가 들어있는 배열 
// numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 
// 숫자를 모두 찾아 더한 수를 return 하도록 
// solution 함수를 완성해주세요.

// Precautions
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 수 ≤ 9
// numbers의 모든 수는 서로 다릅니다.

// Example
// [1,2,3,4,6,7,8,0] 14
// [5,8,4,0,6,7,9] 6

// solution 1
// 0부터 9까지 담은 배열을 만든다.
// numbers배열에 없는 인자를 
// 누적하여 더한 값을 반환한다.
function solution(numbers) {
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let sum  = numArr.reduce((acc, cur) => {
        if (!numbers.includes(cur)) {
            acc = acc + cur
        }
        return acc
    }, 0)
    
    return sum
}

// solution 2
// 0부터 9까지 더한 값과
// numbers안의 요소들을 더한 값의 차액을 반환한다.
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => cur + acc, 0)
}