// forEach, map, filter, find

// 3-7. forEach
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function (item) {
//   console.log("item입니다=>", item);
//   // item입니다=> 1
//   // item입니다=> 2
//   // item입니다=> 3
//   // item입니다=> 4
//   // item입니다=> 5
// });

// 3-8. map : 항상 원본 배열의 길이만큼이 return 된다.
// let newNumbers = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(newNumbers); // [ 2, 4, 6, 8, 10 ]

// 3-9. filter : 조건에 맞는 값들을 새 배열로 만들어줌
// let filteredNumbers = numbers.filter(function (item) {
//   return item !== 3; // 조건
// });

// console.log(filteredNumbers); // [ 1, 2, 4, 5 ]

// 3-10. find : 조건에 맞는 값중 가장 첫번째 출력, 배열 아님
// let result = numbers.find(function (item) {
//   return item > 3;
// });

// console.log(result); // 4
