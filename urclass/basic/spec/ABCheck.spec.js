const chai = require("chai");
const expect = chai.expect;
const ABCheck = require("../solution/ABCheck.js");

describe("ABCheck function test", () => {
  it("1. 빈 문자열을 입력받은 경우, false를 리턴해야 합니다", done => {
    expect(ABCheck("")).to.be.false;
    done();
  });
  it("2. 'lane borrowed'을(를) 입력받은 경우, true를 리턴해야 합니다", done => {
    expect(ABCheck("lane borrowed")).to.be.true;
    done();
  });
  it("3. 'aMAJ7sBrO4CyysuoHFrgGTX'을(를) 입력받은 경우, true를 리턴해야 합니다", done => {
    expect(ABCheck("aMAJ7sBrO4CyysuoHFrgGTX")).to.be.true;
    done();
  });
  it("4. 'TgDrnjAz6kAbdEaxFkrKIsa'을(를) 입력받은 경우, false를 리턴해야 합니다", done => {
    expect(ABCheck("TgDrnjAz6kAbdEaxFkrKIsa")).to.be.false;
    done();
  });
  it("5. 'HK9J6YjrAcMbq8qKrbS3EaPRT'을(를) 입력받은 경우, true를 리턴해야 합니다", done => {
    expect(ABCheck("HK9J6YjrAcMbq8qKrbS3EaPRT")).to.be.true;
    done();
  });
  it("6. 'c'을(를) 입력받은 경우, false를 리턴해야 합니다", done => {
    expect(ABCheck("c")).to.be.false;
    done();
  });
  it("7. 'aaaaaccccbbbbb'을(를) 입력받은 경우, false를 리턴해야 합니다", done => {
    expect(ABCheck("aaaaaccccbbbbb")).to.be.false;
    done();
  });
  it("8. 'vsZYkn LOfgbAabbHYw4tO1O'을(를) 입력받은 경우, false를 리턴해야 합니다", done => {
    expect(ABCheck("vsZYkn LOfgbAabbHYw4tO1O")).to.be.false;
    done();
  });
  it("9. 'LFOMF4zJPuQQNuofLuELseY046UZy6gV'을(를) 입력받은 경우, false를 리턴해야 합니다", done => {
    let input = "LFOMF4zJPuQQNuofLuELseY046UZy6gV";
    expect(ABCheck(input)).to.be.false;
    done();
  });
});
