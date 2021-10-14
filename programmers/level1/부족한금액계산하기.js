// 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N번째 이용한다면
// 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면
// 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서
// 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// Precautions
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

// Example
// price 3
// money 20
// count 4
// result 10

// solution 1
// 총 이용료를 담을 변수를 만든다.
// count가 0이상이면 요금을 계산하여(count*price)
// 총 이용료에 누적하여 더한다.
// count을 1빼고 위 과정을 횟수를 다할때까지 반복한다.
// 가지고 있는 금액과 총 이용료가 크면 금액을 뺀 값을 반환하고
// 총 이용료가 작으면 0을 반환한다.
function solution(price, money, count) {
    let ticket = 0;
    while (count > 0) {
        ticket += price * count;
        count--;
    }
    return money < ticket ? ticket - money : 0;
}

// solution 2
// 등차수열의 합을 이용
// 이용금액의 총 합을 구하기 위해
// 등차수열의 합 공식 * price을 한다.
// 이용금액과 가진금액의 차액을 구하기 위해 money를 뺀다.
// 차액이 양수이면 이용금액이 크기 때문에 차액을 반환하고
// 차액이 음수이면 가진금액이 크기 때문에 0을 반환한다.
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
