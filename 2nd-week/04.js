// 일급객체로써의 함수 (2)

// 4.

// const person = {
//   name: "John",
//   age: 33,
//   isMarried: true,
//   sayHello: function () {
//     console.log(`Hello, My name is ${this.name}`); //  Hello, My name is John
//   },
//   sayHello2: () => {
//     console.log(`Hello, My name is ${this.name}`); // Hello, My name is undefined (화살표함수는 this를 바인딩하지 않는다.)
//   },
// };

// person.sayHello();
// person.sayHello2();

// 5. 배열의 요소로 함수를 할당

// const myArr = [
//   function (a, b) {
//     return a + b;
//   },
//   function (a, b) {
//     return a - b;
//   },
// ];

// console.log(myArr[0](1, 3)); // 1+3 = 4
// console.log(myArr[1](5, 3)); // 5-3 = 2

// 6.

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTwo = multiplyBy(2); // (x) => x * 2

const multiplyByThree = multiplyBy(3); // (x) => x * 3

// console.log(multiplyByTwo(10)); // 20
// console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTwo(5), multiplyByThree(10)); // multiplyByTwo(5) = 10 = x, multiplyByThree(10) = 30 = y, x+y=40
console.log(`최종 => ${result}`); // 최종 => 40
