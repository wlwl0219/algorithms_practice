const chai = require("chai");
const expect = chai.expect;
const compressString = require("../solution/compressString.js");

describe("compressString function test", () => {
  it("1. string 타입을 리턴해야 합니다", done => {
    expect(typeof compressString("WWGGOOPP")).to.be.eql("string");
    done();
  });
  it("2. 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다", done => {
    expect(compressString("")).to.be.eql("");
    done();
  });
  it("3. wwwggopp을(를) 입력받은 경우, 3wggopp을(를) 리턴해야 합니다", done => {
    expect(compressString("wwwggopp")).to.be.eql("3wggopp");
    done();
  });
  it("4. EQTWVOQQQVDVRC을(를) 입력받은 경우, EQTWVO3QVDVRC을(를) 리턴해야 합니다", done => {
    expect(compressString("EQTWVOQQQVDVRC")).to.deep.equal("EQTWVO3QVDVRC");
    done();
  });
  it("5. dsafdasfffffsgaaaaabbbscccdd을(를) 입력받은 경우, dsafdas5fsg5a3bs3cdd을(를) 리턴해야 합니다", done => {
    expect(compressString("dsafdasfffffsgaaaaabbbscccdd")).to.deep.equal(
      "dsafdas5fsg5a3bs3cdd"
    );
    done();
  });
});
