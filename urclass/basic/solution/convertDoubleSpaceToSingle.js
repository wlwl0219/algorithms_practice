// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을
// 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// input
// factor1: string 타입의 문자열

// output
// string 타입의 문자열

// Precautions
// 두 칸 이상의 공백은 존재하지 않는다고 가정합니다.

// Examples
// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); --> "string with double spaces"

// solution 1
// 입력받은 문자열을 " "을 기준으로 쪼개어 배열을 만든다.
// 그 배열의 요소의 길이가 0이상인 요소만 새로운 배열에 넣는다.
// 그 새로운 배열을 " "을 추가하여 문자열로 만들어 반환한다.
function convertDoubleSpaceToSingle(str) {
  return str
    .split(" ")
    .filter((val) => {
      return val.length > 0;
    })
    .join(" ");
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof convertDoubleSpaceToSingle("This  here sentence")).to.be.equal(
    "string"
  );
}

//2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  expect(convertDoubleSpaceToSingle("")).to.be.equal("");
}

// 3. 'this here string'을(를) 입력받은 경우, 'this here string'을(를) 리턴해야 합니다
function test() {
  expect(convertDoubleSpaceToSingle("this here string")).to.be.equal(
    "this here string"
  );
}

//4. 'this  here  string'을(를) 입력받은 경우, 'this here string'을(를) 리턴해야 합니다
function test() {
  expect(convertDoubleSpaceToSingle("this  here  string")).to.be.equal(
    "this here string"
  );
}

// 5. 'you can  do it'을(를) 입력받은 경우, 'you can do it'을(를) 리턴해야 합니다
function test() {
  expect(convertDoubleSpaceToSingle("you can  do it")).to.be.equal(
    "you can do it"
  );
}
