// 클로저(Closure)

// const x = 1;

// function outerFunc() {
//   const x = 10;
//   function innerFunc() {
//     // x는 어디서 참조할까요??
//     // 1. 내부에서 한번 확인
//     // 2. 없으면 outerFunc을 확인
//     // 함수가 선언된 렉시컬 환경!! -> 함수가 선언될 당시의 외부 변수 등의 정보
//     console.log(x); // 10...!
//   }
//   innerFunc();
// }

// outerFunc();

//--------------------------------------------

// [렉시컬 스코프]
// JS엔진은 함수를 어디서 '호출'했는지가 아니라 어디에 '정의'했는지에 따라서 스코프(상위 스코프)를 결정한다.

// '외부 렉시컬 환경에 대한 참조값' => outer
// 함수 정의가 평가되는 시점!!

// const x = 1;

// // outerFunc내에 innerFunc가 '호출'되고 있음에도 불구하고
// function outerFunc() {
//   const x = 10;
//   innerFunc();
// }

// // innerFunc와 outerFunc는 서로 다른 scope를 가지고 있다!!

// function innerFunc() {
//   console.log(x); // 1
// }

// outerFunc();

//-------------------------------------------------------

const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x); // 10
  };
  return inner;
}

// outer함수를 '실행'해서, innerFunc에 담죠..!
// outer함수의 return부분을 innerFunc에 담는다는 얘기..!
const innerFunc = outer();
// 여기서는... outer함수의 실행컨텍스는 ..?

innerFunc();
