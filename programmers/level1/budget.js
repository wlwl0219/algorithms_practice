// 부서별로 신청한 금액이 들어있는 배열 d와
// 예산 budget이 매개변수로 주어질 때,
// 최대 몇 개의 부서에 물품을 지원할 수 있는지
// return 하도록 solution 함수를 완성해주세요.

// Precautions
// d는 부서별로 신청한 금액이 들어있는 배열이며,
// 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며,
// 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// solution 1
// 입력받은 부서별 예산이 담긴 배열을 오름차순한다.
// 예산을 줄 수 있는 값만 담은 배열(supportArr)을 만든다.
// -> 신청한 금액(d배열의 요소)이 예산보다 작으면
//    예산에서 그 금액을 빼고 그 금액을 담은 배열을 만든다.
// supportArr의 길이를 반환한다.
function solution(d, budget) {
  d.sort(function (a, b) {
    return a - b;
  });

  const supportArr = d.filter(ele => {
    if (ele <= budget) {
      budget = budget - ele;
      return true;
    }
  });

  return supportArr.length;
}
