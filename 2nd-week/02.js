// 5. 단축 속성명 :  property shorthand
// key-value의 이름이 같은 경우 하나만 작성할 수 있다.

const name = "nbc";
const newAge = "30";

// key = value
const obj = {
  name,
  age: newAge,
};

// 6. 전개 구문 =  spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
// 기존 구조를 벗고 새롭게 구조화

// 6-1. 배열의 경우
let arr = [1, 2, 3];
// console.log(arr); // [ 1, 2, 3 ]
// console.log(...arr); // 1 2 3

let newArr = [...arr, 4];
// console.log(newArr); // [ 1, 2, 3, 4 ]

// 6-2. 객체의 경우
// let user = {
//   name: "nbc",
//   age: 30,
// };

// let user2 = { ...user, birthday: "today" };

// console.log(user2); // { name: 'nbc', age: 30, birthday: 'today' }

// 7. 나머지 매개변수(rest parameter)

// function exampleFunc(a, b, c, ...args) {
//   console.log(a, b, c); // 1 2 3
//   console.log(...args); // 4 5 6
//   console.log(args); // [ 4, 5, 6 ]
// }

// exampleFunc(1, 2, 3, 4, 5, 6);

// 8. 템플릿 리터럴 (Template Literal)
console.log("Hello World");
const testValue = "ooo님!";
console.log(`Hello World ${testValue}`); // Hello World ooo님!

console.log(`
    Hello
        My name is JavaScript!!
        
        Nice to meet you`); // 멀티라인 지원
