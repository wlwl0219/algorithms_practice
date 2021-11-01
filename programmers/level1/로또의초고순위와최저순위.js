// 민우가 구매한 로또 번호를 담은 배열 lottos,
// (일부 알아볼 수 없는 번호 0이 포함되어 있을 수 있다.)
// 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 
// 이때, 당첨 가능한 최고 순위와 최저 순위를 
// 차례대로 배열에 담아서 return 하도록 
// solution 함수를 완성해주세요.
// 1등: 6개 번호가 모두 일치
// 2등: 5개 번호가 일치
// 3등: 4개 번호가 일치
// 4등: 3개 번호가 일치
// 5등: 2개 번호가 일치

// Precautions
// lottos는 길이 6인 정수 배열입니다.
// lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
// 0은 알아볼 수 없는 숫자를 의미합니다.
// 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.
// lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
// win_nums은 길이 6인 정수 배열입니다.
// win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
// win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.
// win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.

// Example
// [44, 1, 0, 0, 31, 25] [31, 10, 45, 1, 6, 19] [3, 5]
// [0, 0, 0, 0, 0, 0] [38, 19, 20, 40, 15, 25] [1, 6]

// solution 1
// 당첨번호가 로또번호 안에 있는지 foreach문을 활용해서
// 요소 하나씩 확인 후 일치할시 최대등수에 -1을 한다.
// 로또번호 안에 0이 있는지 foreach문을 활용해서
// 요소 하나씩 확인 후 일치할시 최소등수에 -1을 한다.
// 최소, 최대등수가 6이 아니면 +1을 하고
// 각각 배열에 담아 반환한다.
function solution(lottos, win_nums) {
    let max = 6
    win_nums.forEach(ele => {
        if (lottos.includes(ele)) max--
    });

    let min = max
    lottos.forEach(ele => {
        if (!ele) min--
    })

    if (max !== 6) max++
    if (min !== 6) min++
    return [min, max]
}

// solution 2
// 로또번호 중에 당첨번호와 0의 갯수를 각각 구한다.
function solution(lottos, win_nums) {
    let rank = [6, 6, 5, 4, 3, 2, 1]
    let min = lottos.filter(ele => win_nums.includes(ele)).length
    let max = lottos.filter(ele => !ele).length + min

    return [rank[min], rank[max]]
}