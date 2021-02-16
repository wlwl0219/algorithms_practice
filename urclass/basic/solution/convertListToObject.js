// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아
// 각 배열을 이용해 만든 객체를 리턴해야 합니다.

// input
// 배열을 요소로 갖는 배열
// arr[i]는 string 타입을 요소로 갖는 배열
// arr[i].length는 0 또는 2

// output
// arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.

// Precautions
// 중복되는 키의 경우, 초기의 값을 사용합니다.
// 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// arr[i]의 길이가 0인 경우, 무시합니다.

// Examples
// const arr = [
//     ['make', 'Ford'],
//     ['model', 'Mustang'],
//     ['year', '1964'],
//     ['make', 'Bill'],
//   ];
//   let output = convertListToObject(arr);
//   console.log(output)
//   {
//     make : 'Ford'
//     model : 'Mustang',
//     year : '1964'
//   }

// solution 1
// 입력받은 arr의 요소를 하나씩 꺼낸다.
// 그 요소의 길이가 2일 경우
// 새로운 객체에 요소의 [0]으로 된 키가 없을 경우
// 새로운 객체의 키로 [0]을, 값으로 [1]을 넣어 반환한다.
function convertListToObject(arr) {
  return arr.reduce((acc, cur) => {
    if (cur.length === 2 && !acc[cur[0]]) {
      acc[cur[0]] = cur[1];
    }
    return acc;
  }, {});
}

// test start
// 1. 객체를 리턴해야 합니다
function test() {
  const output = convertListToObject([["some", "like"]]);
  expect(typeof output).to.be.equal("object");
  expect(output === null).to.be.equal(false);
  expect(Array.isArray(output)).to.be.false;
}

// 2. 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다
function test() {
  expect(convertListToObject([])).to.deep.equal({});
}

// 3. [[]]을(를) 입력받은 경우, 빈 객체를 리턴해야 합니다
function test() {
  expect(convertListToObject([[]])).to.deep.equal({});
}

// 4. [['some', 'like']]을(를) 입력받은 경우, { some: 'like' }을(를) 리턴해야 합니다
function test() {
  expect(convertListToObject([["some", "like"]])).to.deep.equal({
    some: "like",
  });
}

// 5. [[], ['some', 'like'], []]을(를) 입력받은 경우, { some: 'like' }을(를) 리턴해야 합니다
function test() {
  expect(convertListToObject([[], ["some", "like"], []])).to.deep.equal({
    some: "like",
  });
}

// 6. [['some', 'like'], ['some', 'dislike']]을(를) 입력받은 경우, { some: 'like' }을(를) 리턴해야 합니다
function test() {
  expect(
    convertListToObject([
      ["some", "like"],
      ["some", "dislike"],
    ])
  ).to.deep.equal({
    some: "like",
  });
}

// 7. [['some', 'like'], ['first', 'second'], ['melee', 'brawl']]을(를) 입력받은 경우, { some: 'like', first: 'second', melee: 'brawl' }을(를) 리턴해야 합니다
function test() {
  expect(
    convertListToObject([
      ["some", "like"],
      ["first", "second"],
      ["melee", "brawl"],
    ])
  ).to.deep.equal({
    some: "like",
    first: "second",
    melee: "brawl",
  });
}

// 8. [['some', 'like'], ['first', 'second'], ['mike', 'ike'], ['first', 'Fox'], ['melee', 'brawl']]을(를) 입력받은 경우, { some: 'like', first: 'second', mike: 'ike', melee: 'brawl' }을(를) 리턴해야 합니다
function test() {
  expect(
    convertListToObject([
      ["some", "like"],
      ["first", "second"],
      ["mike", "ike"],
      ["first", "Fox"],
      ["melee", "brawl"],
    ])
  ).to.deep.equal({
    some: "like",
    first: "second",
    mike: "ike",
    melee: "brawl",
  });
}
