// 가로의 길이 W와 세로의 길이 H가 주어질 때, 
// 누군가가 이 종이를 대각선 꼭지점 2개를 
// 잇는 방향으로 잘라 놓았습니다.
// 이때 사용할 수 있는 정사각형의 개수를 구하는 
// solution 함수를 완성해 주세요.

// Precautions
// W, H : 1억 이하의 자연수

// Example
// 가로가 8, 세로가 12인 직사각형을 대각선 방향으로 
// 자르면 총 16개 정사각형을 사용할 수 없게 됩니다. 
// 원래 직사각형에서는 96개의 정사각형을 만들 수 
// 있었으므로, 96 - 16 = 80 을 반환합니다.

// solution 1
function solution(w, h) {
    const gcd = (a, b) => {
        return b ? gcd(b, a % b) : a;
    }

    return w * h - (w + h - gcd(w, h));
}

// solution 2
function solution(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}