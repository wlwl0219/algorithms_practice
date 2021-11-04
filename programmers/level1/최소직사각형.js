// 모든 명함의 가로 길이와 세로 길이를 
// 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 
// 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// Precautions
// sizes의 길이는 1 이상 10,000 이하입니다.
// sizes의 원소는 [w, h] 형식입니다.
// w는 명함의 가로 길이를 나타냅니다.
// h는 명함의 세로 길이를 나타냅니다.
// w와 h는 1 이상 1,000 이하인 자연수입니다.

// Example
// [[60, 50], [30, 70], [60, 30], [80, 40]] 4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]] 120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]] 133

// solution 1
// 2차원 배열 안의 배열 원소를
// 내림차순으로 정렬한다.
// 그렇게 정렬된 1차원 배열을
// 가로, 세로로 분류하고 비교해서
// 각각 최댓값을 구하고 곱하여 반환한다.
function solution(sizes) {
    let max = [0, 0];
    sizes.forEach(ele => {
        const [a, b] = ele.sort((a, b) => b-a)
        if (a > max[0]) max[0] = a
        if (b > max[1]) max[1] = b
    })
    return max[0] * max[1]
}

// solution 2
// reduce로 2차원 배열 안의 배열 원소중 큰 수와
// 가로길이로 지정한 누적값과 큰 수를 구하고
// 세로도 배열의 원소중 작은 수와 세로길이로
// 지정한 누적값과 큰 수를 구한다.
// 그렇게 만들어진 가로와 세로를 곱해 반환한다.
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
