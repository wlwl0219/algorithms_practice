// 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를
// 키와 값으로 하는 객체를 리턴해야 합니다.

// input
// factor1: string 타입을 요소로 갖는 배열

// output
// 객체를 리턴해야 합니다.

// Precautions
//빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// 입력으로 받는 배열을 수정하지 않아야 합니다.

// Examples
// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// let output = transformFirstAndLast(arr);
// console.log(output); --> { Queen : 'Beyonce' }

// solution 1
function transformFirstAndLast(arr) {
    let obj = {};
    if (arr.length) {
      obj[arr[0]] = String(arr.slice(-1));
    }
    return obj;
  }