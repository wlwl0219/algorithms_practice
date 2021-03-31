// 주어진 숫자 중 3개의 수를 더했을 때
// 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// Precautions
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// solution 1
// 입력받은 배열(nums)에서 서로 다른
// 3개의 소를 더한값을 담은 배열(sumArr)을 만든다.
// sumArr의 원소중 소수인 원소만 담은 배열(resultArr)을 만든다.
// resultArr의 길이를 반환한다.
function solution(nums) {
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let resultArr = sumArr.filter(ele => {
    for (let i = 2; i < ele; i++) {
      if (ele % i === 0) return false;
    }
    return true;
  });

  return resultArr.length;
}
