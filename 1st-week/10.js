// 1. 조건문의 중첩

// let age = 20;
// let gender = "여성";

// // 미성년자 구분
// if (age >= 18) {
//   console.log("성인입니다.");
//   if (gender === "여성") {
//     console.log("성인 여성입니다.");
//   } else {
//     console.log("성인 남성입니다. ");
//   }
// } else {
//   if (gender === "여성") {
//     console.log("미성년 여성입니다. ");
//   } else {
//     console.log("미성년 남성입니다.");
//   }
// }

// 2. 조건부 실행
// 2-1. and조건(&&) : if키워드와 같다.
// let x = 10;

// if (x > 0) {
//   console.log("x는 양수입니다. ");
// }

// x > 0 && console.log("x는 양수입니다.");

// 2-2. or조건(||)
// 삼항 연산자와 단축평가
// let y; // y는 undefined
// let z = y || 20; // y가 존재하지 않으면 20을 넣어줘

// console.log(z);

// 3. falsy 한 값, truthy한 값
// falsy :  0,"",false, NaN, undefined

if (0) {
  console.log("hello1");
}
if ("") {
  console.log("hello2");
}
if (null) {
  console.log("hello3");
}
if (false) {
  console.log("hello4");
}
if (NaN) {
  console.log("hello5");
}
if (undefined) {
  console.log("hello6");
}
if (true) {
  console.log("hello7");
} // 이 조건문만 출력
