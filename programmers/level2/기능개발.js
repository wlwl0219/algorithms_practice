// 먼저 배포되어야 하는 순서대로 작업의 진도가 
// 적힌 정수 배열 progresses와 각 작업의 개발 속도가 
// 적힌 정수 배열 speeds가 주어질 때 
// 각 배포마다 몇 개의 기능이 배포되는지를 
// return 하도록 solution 함수를 완성하세요.

// Precautions
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 
// 하루의 끝에 이루어진다고 가정합니다. 
// 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 
// 4%라면 배포는 2일 뒤에 이루어집니다.

// Example
// [93, 30, 55]	[1, 30, 5]	[2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

// solution 1
// 작업을 완료하는데 걸리는 일수를 구하기 위해
// 100에서 진도를 뺀 후 속도를 나누고
// 가까운 정수로 올림한 값들을 담은 배열을 만든다.
// 누적된 기능 갯수를 담을 배열을 만들고
// 작업 일수 배열만큼 반복문을 만든다.
// 새로운 최댓값을 만나기 전까지 count를 올리고
// 새로운 최댓값을 만나면 누적된 count를 push한후
// count를 1로 초기화하고, 새로운 최대값으로 할당한다.
// 반복문 종료후 남은 count를 push한후 해당 배열을 반환한다.
function solution(progresses, speeds) {
    let day = progresses.map((ele, inx) => Math.ceil((100 - ele) / speeds[inx]))
    let result = []
    let count = 1
    let num = day[0]

    for (let j = 1; j < day.length; j++) {
        if (num < day[j]) {
            result.push(count)
            num = day[j]
            count = 1
        } else {
            count++
        }
    }
    result.push(count)
    return result
}

// solution 2
// 위와 비슷하게 작업일수 배열을 만들고
// 작업일수만큼 반복문을 만든다.
// 누적일수를 할당할때 index로 참고할 j를
// 추가로 만들어 새로운 최댓값을 만날때 
// 최대값을 새로 할당 후 j를 1올리고 1일 할당한다.
// 새로운 최댓값을 만나기 전에는 해당j index에 1일 올린다.
// 이후 만들어진 배열을 반환한다.
function solution(progresses, speeds) {
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];
    let answer = [0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}