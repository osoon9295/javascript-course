// 문( if, else if, switch ~~ )

// 조건문 - if, else if, else, switch

// 1. if문
let x = 0;

// 1-1
// if (x > 0) {
//   // 괄호 안에는 true나 false가 나오는 조건이 필요
//   // main logic
//   console.log(" x는 양수입니다.");
// }

// 1-2
// let y = "hello world";

// if (y.length >= 5) {
//   console.log(y.length);
// }

// 2. if-else문
// if (x > 0) {
//   // main logic #1
//   console.log("x는 양수입니다.");
// } else {
//   // main logic #2
//   console.log("x는 음수입니다.");
// }

// 3. if-else if - else 문
// if (x < 0) {
//   // main logic #1
//   console.log("x는 음수입니다.");
// } else if (x > 0) {
//   // main logic #2
//   console.log("x는 양수입니다.");
// } else {
//   // main logic #3
//   console.log("x는 0입니다.");
// }

// 4. switch문
// 변수의 값에 따라, 여러개의 경우(case) 중 하나를 선택
// default
// case마다 break 꼭 필요

let fruit = "오징어";

switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "바나나":
    console.log("바나나입니다.");
    break;
  case "키위":
    console.log("키위입니다.");
    break;
  default:
    console.log("아무것도 아닙니다.");
    break;
}
