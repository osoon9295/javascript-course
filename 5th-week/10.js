// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// // 카운트 상태 변수
// let num = 0;

// // 카운트 상태 변경 함수
// const increase = function () {
//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// console.log(increase());
// // num = 100; // 치명적인 단점이 있어요.
// console.log(increase());
// console.log(increase());

// 보완해야 할 사항
// 1. 카운트 상태 (num 변수의 값)
// => increase 함수가 호출되기 전까지는 변경되지 x
// 2. 이를 위해서 count 상태는 increase 함수만이 변경 !!
// 3. 전역변수 num 요놈이 문제다. -> 지역변수..?

// ------------------------------------------------------

// 카운트 상태 변경 함수 #2
// const increase = function () {
//   // 카운트 상태 변수
//   let num = 0;

//   // 카운트 상태를 1만큼 증가시킨다.
//   return ++num;
// };

// // 이전 상태값을 유지 못함
// console.log(increase()); // 1
// console.log(increase()); // 1
// console.log(increase()); // 1

// [리뷰]
// 1. num 변수는 increase함수의 지역변수로 선언 -> 변경은 방지
//   = num 변수는 오직 increase함수만이 변경할 수 있었음!
// 2. 하지만, increase()가 호출될 때 마다 num이 초기화되는 이상한 코드..!
// 3. 백번, 천번, 만번 호출 -> 출력값은 언제나 1
// * 의도치 않은 변경은 방지하면서 + 이전 상태를 유지해야 함
// * 결론 :  closure!!

// --------------------------------------------------------

// 카운트 상태 변경 함수 #3
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저
  return function () {
    return ++num;
  };
})();

// 이전 상태값을 유지
console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// [코드 설명]
// 1. 위 코드가 실행되면, '즉시 실행 함수'가 호출 -> 함수가 반환(inner) -> increase에 할당
// 2. increase변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는 클로저 ->  let num=0 을 기억한다.
// 3. 즉시 실행함수는 -> 즉시 소멸되죠!! (outer함수가 불리자마자 바로 call stack에서 popup되는 것과 비슷...!! )
// * 결론 : num은 초기화 x. 외부에서 접근할 수 없는 은닉된 값!!! 의도되지 않은 변경도 걱정할 필요가 없죠!!
// --> increase에서만 변경할 수 있기 때문에...!!!
