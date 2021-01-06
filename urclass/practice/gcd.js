// 주어진 두 숫자에 대한 최대공약수(greatest common divisor)를 구하세요.
// Examples
// gcd(22, 24);  2

function gcd(num1, num2) {
  // 두 수의 공통된 약수중 최대수인 수를 반환
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

// test start
// 1. 항상 배열을 리턴해야합니다.
