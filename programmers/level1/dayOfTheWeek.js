// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이
// 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// Precautions
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// solution 1
// 일요일부터 순서로 요일을 담은 임의의 배열을 만든다.
// new Date()생성자로 날짜 객체를 만든다.
// 날짜 객체를 Date.prototype.getDay()함수로 요일의 인덱스를 받아 반환한다.
function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return week[new Date(`2016-${a}-${b}`).getDay()];
}

// solution 2
// new Date()생성자로 날짜 객체를 만든다.
// 날짜 객체를 문자열로 변환 후 요일이 포함된 부분만
// 추출하여 대문자로 변환 후 반환한다.
function solution(a, b) {
  return new Date(`2016-${a}-${b}`).toString().slice(0, 3).toUpperCase();
}
