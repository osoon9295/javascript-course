// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.
// 배열에 대한 메서드

// index, currentValue : 사람이 이해할 수 있는 변수명일 뿐

var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

// return이 없다면 결과는 뭐가 될까?
// console.log(newArr); // [ undefined, undefined, undefined ]

// return이 있다면
// console.log(newArr); // [ 15, 25, 35 ]
