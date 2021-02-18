const chai = require("chai");
const expect = chai.expect;
const computeSquareRoot = require("../solution/computeSquareRoot.js");

describe("computeSquareRoot function test", () => {
  it("1. number 타입을 리턴해야 합니다", done => {
    expect(typeof computeSquareRoot(4)).to.be.equal("number");
    done();
  });
  it("2. 4을(를) 입력받은 경우, 2을(를) 리턴해야 합니다", done => {
    expect(computeSquareRoot(4)).to.be.equal(2);
    done();
  });
  it("3. 9을(를) 입력받은 경우, 3을(를) 리턴해야 합니다", done => {
    expect(computeSquareRoot(9)).to.be.equal(3);
    done();
  });
  it("4. 5을(를) 입력받은 경우, 2.24을(를) 리턴해야 합니다", done => {
    expect(computeSquareRoot(5)).to.be.equal(2.24);
    done();
  });
  it("5. 6을(를) 입력받은 경우, 2.45을(를) 리턴해야 합니다", done => {
    expect(computeSquareRoot(6)).to.be.equal(2.45);
    done();
  });
  it("6. 144을(를) 입력받은 경우, 12을(를) 리턴해야 합니다", done => {
    expect(computeSquareRoot(144)).to.be.equal(12);
    done();
  });
});
