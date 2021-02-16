// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을
// 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다.
// 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// input
// factor1: string 타입의 알파벳 소문자 문자열
// factor2: number 타입의 암호화 키

// output
// string 타입을 리턴해야 합니다.

// Precautions
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백은 그대로 두어야 합니다.

// Examples
// let output = decryptCaesarCipher('khoor', 3);
// console.log(output); // --> hello

// solution 1
// 모든 소문자 알파벳을 순서대로 담은 문자열 임의의 변수(alpa)를 만든다.
// 복호화한 문자열을 만들기 위해 임의의 변수(result)를 만든다.
// 입력받은 문자열의 요소 하나씩 접근한다.
// 만난 요소가 공백일 경우 그대로 result에 합친다.
// 공백이 아닐 경우 alpa에서 해당 요소가 있는 인덱스를 구한다.
// 그 인덱스에서 secret만큼 뺀다.
// 그 값에 alpa의 길이를 더한 후
// alpa의 길이로 나눈 나머지 값을 구한다.
// (인덱스보다 secret가 더 클 수 있기 때문에)
// 구한 나머지 값으로 alpa의 인덱스로 접근하여 해당 요소를 result에 합친다.
// 최종적으로 구한 result를 반환한다.
function decryptCaesarCipher(str, secret) {
  let alpa = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result = result + " ";
    } else {
      let index = alpa.indexOf(str[i]);
      let reIndex = (index - secret + alpa.length) % alpa.length;
      result = result + alpa[reIndex];
    }
  }
  return result;
}

// test start
// 1. string 타입을 리턴해야 합니다
function test() {
  expect(typeof decryptCaesarCipher("hello")).to.be.equal("string");
}

// 2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다
function test() {
  expect(decryptCaesarCipher("", 7)).to.be.equal("");
}

// 3. 차례대로 'khoor zruog', 3을(를) 입력받은 경우, 'hello world'을(를) 리턴해야 합니다
function test() {
  expect(decryptCaesarCipher("khoor zruog", 3)).to.be.equal("hello world");
}

// 4. 차례대로 'nzop delepd dfaazced jzf', 11을(를) 입력받은 경우, 'code states supports you'을(를) 리턴해야 합니다
function test() {
  expect(decryptCaesarCipher("nzop delepd dfaazced jzf", 11)).to.be.equal(
    "code states supports you"
  );
}

// 5. 차례대로 'mnv xnt zqd qdzcx sn lnud sn hlldqrhud bntqrd', 25을(를) 입력받은 경우, 'now you are ready to move to immersive course'을(를) 리턴해야 합니다
function test() {
  expect(
    decryptCaesarCipher("mnv xnt zqd qdzcx sn lnud sn hlldqrhud bntqrd", 25)
  ).to.be.equal("now you are ready to move to immersive course");
}
