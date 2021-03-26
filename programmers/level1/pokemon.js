// 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의
// 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.
// 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에,
// 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.
// N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때,
// N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아,
// 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

// Precautions
// nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
// 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도,
// 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

// solution 1
// 주어진 포켓몬 요소중에 중복을 제거한 새로운 배열을 만든다.(kinds)
// kinds배열의 길이와 포켓몬의 절반 갯수중 작은 수를 반환한다.
function solution(nums) {
  let kinds = [];
  nums.forEach(ele => {
    if (!kinds.includes(ele)) {
      kinds.push(ele);
    }
  });

  return Math.min(kinds.length, nums.length / 2);
}

// solution 2
// 주어진 포켓몬 요소중에 중복을 제거하기 위해 Set함수를 이용한 새로운 객체를 만든다.(kinds)
// kinds의 크기와 포켓몬의 절반 갯수중 작은 수를 반환한다.
function solution(nums) {
  const kinds = new Set(nums);
  const kindsSize = kinds.size;
  const numsHalf = nums.length / 2;
  return kindsSize > numsHalf ? numsHalf : kindsSize;
}
