// 문자열을 1개 이상의 단위로 잘라서 압축하여 
// 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.
// 예를 들어, "ababcdcdababcdcd"의 경우 
// 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 
// 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 
// 표현할 수 있습니다. 다른 방법으로 8개 단위로 
// 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 
// 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
// 압축할 문자열 s가 매개변수로 주어질 때, 
// 위에 설명한 방법으로 1개 이상 단위로 
// 문자열을 잘라 압축하여 표현한 문자열 중 
// 가장 짧은 것의 길이를 return 하도록 
// solution 함수를 완성해주세요.

// Precautions
// s의 길이는 1 이상 1,000 이하입니다.
// s는 알파벳 소문자로만 이루어져 있습니다.

// Example
// "aabbaccc" 7
// "ababcdcdababcdcd" 9
// "abcabcdede" 8

// solution 1
// 문자 단위를 나타내는 반복문을 만든다.
// 문자 단위만큼 문자열을 만들어
// 다음 문자 단위와 비교한다.
// 같을 경우 count++, 다를 경우 count와 단위 문자를
// 압축문자열에 합친 후 비교할 새로운 문자를 할당하고
// count를 1로 초기화 한다. 
// 이렇게 특정 단위의 압축 문자열이 만들어지면
// 문자열의 길이를 배열에 넣어준다.
// 모든 반복문이 종료되면 배열의 요소 중 제일 작은 수를 반환한다.
function solution(s) {
    let arr = [];
    for (let i = 1; i <= s.length; i++ ) {
        let word = ""
        let str = s.substr(0, i)
        let count = 1
        for (let j = i; j < s.length * 2; j+=i ) {
            if (str === s.substr(j, i)) {
                count++
            } else {
                count = count === 1 ? "" : count
                word = word + count + str
                str = s.substr(j, i)
                count = 1
            }
        }
        arr.push(word.length)
    }
    return Math.min(...arr)
}
