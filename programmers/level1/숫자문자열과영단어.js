// 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 
// 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 
// 주어집니다. s가 의미하는 원래 숫자를 return 하도록 
// solution 함수를 완성해주세요.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"

// Precautions
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 
// 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 
// 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

// Example
// "one4seveneight" 1478
// "23four5six7" 234567
// "2three45sixseven" 234567
// "123" 123

// solution 1
// 각 알파벳과 대응하는 숫자를 담은 객체를 만든다.
// 객체 반복문을 실행하여 s안에 있는 문자열을 
// 해당하는 숫자로 바꿔 반환한다.
function solution(s) {
    let regex
    const numObj = {
        "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", 
        "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
    }

    for (let i in numObj) {
        regex = new RegExp(i, "g")
        s = s.replace(regex, numObj[i])
    }
    return Number(s)
}

// solution 2
// 각 알파벳으로 해당하는 숫자를 인덱스 기준을 한 배열을 만든다.
// 배열을 반복하여 요소를 기준으로 split하고
// (알파벳이 사라지고 그 기준으로 나누어진 배열이 만들어짐)
// 해당하는 인덱스로 join한다. (알파벳이 사라진 공간에 숫자로 채워짐)
// 그렇게 만들어진 문자열을 숫자로 변환하여 반환한다.
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i=0; i< numbers.length; i++) {
        let arr = s.split(numbers[i]);
        s = arr.join(i);
    }
    return Number(s);
}