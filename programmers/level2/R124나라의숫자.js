// 자연수 n이 매개변수로 주어질 때, 
// n을 124 나라에서 사용하는 숫자로 
// 바꾼 값을 return 하도록 solution 
// 함수를 완성해 주세요.

// Precautions
// n은 500,000,000이하의 자연수 입니다.

// Example
// 1	1
// 2	2
// 3	4
// 4	11

// solution 1
// 124 숫자 세 개를 사용하므로
// 3진법으로 변환해준다.
// 10진법의 자연수를 3으로 나누어
// 나머지가 0일때 몫은 -1, 나머지는 4로 바꾸어
// 문자열에 붙여주는 것을 반복하고 반환한다.
function solution(n) {
    let answer = '',
        numbers = ['4', '1', '2']

    while(n){
        answer = numbers[n % 3] + answer
        n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3)
    }

    return answer;
}

const solution = n => f(n - 1);
const f = n => n < 3 ? '124'[n] : f(div(n, 3) - 1) + f(n % 3);
const div = (a, b) => parseInt(a / b);

function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

function solution(n) {
    let answer = '';

    while (n > 0) {
        switch (n % 3) {
            case 1:
                answer = "1" + answer;
                n = Math.floor(n / 3);
                break;
            case 2:
                answer = "2" + answer;
                n = Math.floor(n / 3);
                break;
            case 0:
                answer = "4" + answer;
                n = n / 3 - 1;
                break;
        }
    }

    return answer;
}