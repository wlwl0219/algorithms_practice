// 문자열을 입력받아 문자열을 구성하는 각 단어의
// 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 공백이 있는 알파벳 문자열

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

// Examples
// let output1 = letterCapitalize('hello world');
// console.log(output1); -> "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); -> "Javascript  Is Sexy "

// solution 1
// 공백은 그대로 유지
// 단어의 첫 글자만 대문자로 나머진 그대로
// 1. 문자열을 " "을 기준으로 배열로 쪼갠다.
// 2. 각 원소의 길이가 1이상(단어)일때
//    첫 글자만 대문자로 나머지 글자는 그대로 변경한다.
// 3. 다시 배열을 문자열로 변환하여 반환한다.
function letterCapitalize(str) {
  let arr = str.split(" ");
  return arr
    .map((val) => {
      if (val.length > 0) return val[0].toUpperCase() + val.substring(1);
    })
    .join(" ");
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof letterCapitalize("code states")).to.be.eql("string");
}

// 2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  expect(letterCapitalize("")).to.be.equal("");
}

// 3. '    '을(를) 입력받은 경우, '    '을(를) 리턴해야 합니다
function test() {
  expect(letterCapitalize("    ")).to.be.equal("    ");
}

// 4. 'you can DO it!'을(를) 입력받은 경우, 'You Can DO It!'을(를) 리턴해야 합니다
function test() {
  expect(letterCapitalize("you can DO it!")).to.be.eql("You Can DO It!");
}

// 5. ' nEVER  gIVE uP '을(를) 입력받은 경우, ' NEVER  GIVE UP '을(를) 리턴해야 합니다
function test() {
  expect(letterCapitalize(" nEVER  gIVE uP ")).to.be.eql(" NEVER  GIVE UP ");
}

// 6. 'you have a idea'을(를) 입력받은 경우, 'You Have A Idea'을(를) 리턴해야 합니다
function test() {
  expect(letterCapitalize("you have a idea")).to.be.eql("You Have A Idea");
}

// 7. 'what a wonderful life'을(를) 입력받은 경우, 'What A Wonderful Life'을(를) 리턴해야 합니다
function test() {
  expect(letterCapitalize("what a wonderful life")).to.be.eql(
    "What A Wonderful Life"
  );
}
