// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와
// 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가
// 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져
// (인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다)
// (같은 모양의 인형이 모인 갯수 만큼 터트려짐)
// 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

// Precautions
// board 배열은 2차원 배열로 크기는 "5 x 5" 이상 "30 x 30" 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며
// 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며
// board 배열의 가로 크기 이하인 자연수입니다.

// solution 1
// moves배열에 들어있는 원소(인형의 위치) 하나씩 뽑아
// board의 그 자리가 0으로 바뀌고 그 인형을 반환하는 함수를 실행한다.
// 그 함수의 실행결과를 임의의 배열(dollList)에 담는다.
// 뽑힌 인형을 담은 배열을 순회하며 같은 수가 연속으로 있는 개수를 세어 반환한다.
// -> 시간초과
function solution(board, moves) {
  function pickDoll(board, num) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][num - 1]) {
        let doll = board[i][num - 1];
        board[i][num - 1] = 0;
        return doll;
      }
    }
  }

  let dollArray = [];
  for (let i = 0; i < moves.length; i++) {
    dollArray.push(pickDoll(board, moves[i]));
  }
  let dollList = dollArray.filter(ele => ele);

  let i = 0;
  let count = 0;
  while (i < dollList.length) {
    if (dollList[i] === dollList[i + 1]) {
      count = count + 2;
      dollList.splice(i, 2);
      i = i - 3;
    }
    i++;
  }
  return count;
}

// solution 2
// moves배열에 들어있는 원소(인형의 위치) 하나씩 뽑아
// board의 그 자리가 0으로 바뀌고 그 인형을 반환하는 함수를 실행한다.
// 그렇게 뽑은 인형이 임의의 배열의 마지막 원소와 같다면
// pop으로 제거하고 제거한 인형의 갯수를 세는 count에 2를 더한다.
// 마지막 원소와 같지 않다면 뽑은 인형을 임의의 배열에 푸쉬한다.
//moves배열을 모두 돌았다면 count를 반환한다.
function solution(board, moves) {
  function pickDoll(board, num) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][num - 1]) {
        let doll = board[i][num - 1];
        board[i][num - 1] = 0;
        return doll;
      }
    }
  }

  let count = 0;
  let dollList = [];
  moves.forEach(ele => {
    const doll = pickDoll(board, ele);
    if (doll) {
      if (dollList[dollList.length - 1] === doll) {
        dollList.pop();
        count += 2;
      } else {
        dollList.push(doll);
      }
    }
  });
  return count;
}
