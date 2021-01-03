// convert nested (2-dimensional) array to flatten array!
// (2차원 배열을 1차원 배열로 전환하세요.)
// Examples
// flatten([1,2,[3],[4]]);  [1,2,3,4]

function flatten(array) {
  //   return array.reduce((acc, cur) => {
  //     return acc.concat(cur);
  //   }, []);
  return array.flat();
}

// 1. 항상 배열을 리턴해야합니다.
function test() {
  let result = flatten([]);
  expect(Array.isArray(result)).to.be.equal(true);
}

// 2. 리턴한 배열안에 또 다른 배열이 존재하지 않아야합니다.
function test() {
  let result = flatten([[1], [2], [3]]);

  let isNotArray = result.reduce(function (acc, item) {
    if (!acc) return false;
    return !Array.isArray(item);
  }, result[0]);

  expect(isNotArray).to.be.equal(true);
}

// 3. 주어진 배열이 빈 배열을 가지고 있다면 빈 배열은 무시해야합니다.
function test() {
  let result = flatten([[1], [], [3]]);

  expect(result.length).to.be.equal(2);
}

// 4. 중첩된 배열을 하나의 배열로 만들어주어야합니다.
function test() {
  let result1 = flatten([[1], [2], [3]]); //[1,2,3]
  let result2 = flatten([[1], [], [3]]); //[1,3]
  let result3 = flatten(["abcd", "[1,2,3]", ["[]"], [null], [true, false]]); //['abcd','[1,2,3]','[]',null,true,false]

  expect(result1).to.be.eql([1, 2, 3]);
  expect(result2).to.be.eql([1, 3]);
  expect(result3).to.be.eql(["abcd", "[1,2,3]", "[]", null, true, false]);
}
