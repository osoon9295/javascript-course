// 스코프, 전역변수, 지역변수, 화살표함수
let x = 10;

function printX() {
  console.log(x); // 10 :  전역변수 x
}

console.log(x); // 10
printX();

// 비교
function printY() {
  let y = 10; // 지역변수 y
  console.log(y);
}

console.log(y); // 오류발생
printY();

// 화살표 함수
// ES6 신 문법
function add(x, y) {
  return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

// 1-2. 한 줄로
let arrowFunc02 = (x, y) => x + y; // {} 꼭 제거

function testFunc(x) {
  return x;
}

let arrowFunc03 = (x) => x; // 이렇게도 가능하다.
