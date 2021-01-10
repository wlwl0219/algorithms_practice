// 주어진 두 숫자에 대한 최대공약수(greatest common divisor)를 구하세요.
// Examples
// gcd(22, 24);  2

// solution 1
// 두 수의 공통된 약수중 최대수인 수를 반환
function gcd(num1, num2) {
  let arr1 = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      if (num2 % i === 0) {
        arr1.push(i);
      }
    }
  }
  return Math.max(...arr1);
}

// solution 2
// 유클리드 호제법을 이용
// 정확히 나누어 진다면 두번째 수 반환
// 나누어 질때 까지 두번째 수와 나머지를 나눈다.
function gcd(num1, num2) {
  return num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
}

// solution 3
// 유클리드 호제법을 이용
// 두번째 수가 0이라면 첫번째 수 반환
// 나누어 질때 까지 두번째 수와 나머지를 나눈다.
function gcd(num1, num2) {
  return num2 ? gcd(num2, num1 % num2) : num1;
}
