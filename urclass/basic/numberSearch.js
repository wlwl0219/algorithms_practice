// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에
// 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로
// 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// input
// factor1: string 타입의 문자열

// output
// number 타입을 리턴해야 합니다 (0 이상의 정수)

// Precautions
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.

// Examples
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1
// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 1
// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2

// solution 1
// 정규표현식 활용
// 빈 문자열일 경우 0을 반환한다.
// 입력받은 문자열로 숫자만 담은 배열을 만들어 각 원소를 모두 더한 값을 만든다.
// 입력받은 문자열로 숫자를 제외한 배열을 만들고 다시 문자열로 만든다.
// 숫자를 제외한 문자열로 공백을 제외한 배열로 길이를 계산 값을 만든다.
// 숫자를 모두 더한 값과 문자열 길이를 계산한 값으로 나누어 정수로 반올림하여 반환한다.
function numberSearch(str) {
  if (str.length === 0) {
    return 0;
  }
  let sum = str.match(/[0-9]/g).reduce((acc, cur) => {
    acc = acc + Number(cur);
    return acc;
  }, 0);
  let strLength = str.match(/\D/g).join("").match(/\S/g).length;
  return Math.round(sum / strLength);
}

// solution 2
// for문을 활용
// 빈 문자열일 경우 0을 반환한다.
// 숫자를 담은 임의의 문자열을 만든다.
// 입력받은 문자열의 요소 하나씩 접근한다.
// 요소 하나가 만약 임의의 숫자를 담은 문자열에 포함 되어있다면
// 그 요소를 숫자로 바꾸고 누적하여 더한 값을 만든다.
// 요소 하나가 만약 공백이라면 그 요소를 누적하여 문자열을 만든다.
// 숫자들을 더한값을 누적한 문자열로 나누어 정수로 반올림하여 반환한다.
function numberSearch(str) {
  if (str === "") {
    return 0;
  }
  const digits = "0123456789";
  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      pureStr = pureStr + str[i];
    }
  }
  return Math.round(sum / pureStr.length);
}

// test start
// 1. number 타입을 리턴해야 합니다
function test() {
  expect(typeof numberSearch("hello world2 , nice meet you2")).to.be.eql(
    "number"
  );
}

// 2. 빈 문자열을 입력받은 경우, 0을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("")).to.be.eql(0);
}

// 3. "Hello6 "을(를) 입력받은 경우, 1을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("Hello6 ")).to.be.eql(1);
}

// 4. "8ad"을(를) 입력받은 경우, 4을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("8ad")).to.be.eql(4);
}

// 5. "Hello6 9World 2, Nic8e D7ay!"을(를) 입력받은 경우, 2을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("Hello6 9World 2, Nic8e D7ay!")).to.be.eql(2);
}

// 6. "YlQO uT9"을(를) 입력받은 경우, 2을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("YlQO uT9")).to.be.eql(2);
}

// 7. "Fwe eAF 1FLOM d EEYdNWNWNPfN HGVcFWAXwzfEy hHpzF5OhAvuNqhbdY8xViTV cZzJOYpqXNSIkWO7G"을(를) 입력받은 경우, 0을(를) 리턴해야 합니다
function test() {
  expect(
    numberSearch(
      "Fwe eAF 1FLOM d EEYdNWNWNPfN HGVcFWAXwzfEy hHpzF5OhAvuNqhbdY8xViTV cZzJOYpqXNSIkWO7G"
    )
  ).to.be.eql(0);
}

// 8. "Sou2bgPJkS7Lp5r2j6jeWOts8X"을(를) 입력받은 경우, 2을(를) 리턴해야 합니다
function test() {
  expect(numberSearch("Sou2bgPJkS7Lp5r2j6jeWOts8X")).to.be.eql(2);
}
