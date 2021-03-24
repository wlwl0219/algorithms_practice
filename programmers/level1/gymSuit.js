// 전체 학생의 수 n,
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가
// 매개변수로 주어질 때, 체육수업을 들을 수 있는
// 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// Precautions
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 바로 앞번호의 학생이나
// 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
// 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// solution 1
// 여벌의 체육복을 가지고 온 학생중 도난당하지 않은 배열을 새로 만든다.(newReserve)
// 도난당한 학생중 여벌의 체육복을 가지고 오지 않은 배열을 새로 만든다.(newLost)
// newLost배열의 요소중 newReserve의 요소와 값의 차이가 1인 요소가 있다면
// 그 요소를 제외한 배열을 만든다.(nonappearance)(newReserve배열에서도 제외)
// 입력받은 학생수와(n) nonappearance배열의 길이를 뺀 값을 반환한다.
function solution(n, lost, reserve) {
  let newReserve = reserve.filter(ele => !lost.includes(ele));
  let newLost = lost.filter(ele => !reserve.includes(ele));

  let nonappearance = newLost.filter(lost => {
    let borrow = newReserve.find(ele => Math.abs(ele - lost) === 1);
    newReserve = newReserve.filter(ele => ele !== borrow);
    return !borrow;
  });

  return n - nonappearance.length;
}
