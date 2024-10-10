// ES6

// 1. let,const
// 2015년도 이전 => var
// let:변수, const:상수

// 2. arrow function

// function add(x) {
//   return 1;
// }

// var add = function (x) {
//   return 1;
// };

// var add = (x) => {
//   return 1;
// };

// var add = (x) => 1;

// 3. 삼항연산자
// condition ?  true인 경우 : false인 경우

// console.log(true ? "참" : "거짓"); // 참

// 4. 구조분해할당 : de + structure + ing
// 배열이나 객체의 속성을 분해

// 4-1. 배열의 경우
// let [value1, value2] = [1, "new"];

// console.log(value1); // 1

// let arr = ["value1", "value2", "value3","value4"];
// let [a, b, c, d=4,e=5,f] = arr;

// console.log(a); // value1
// console.log(d); // value4 (4가 아니다.)
// console.log(e); // 5
// console.log(f); // undefined

// 4-2. 객체의 경우

let user = {
  name: "nbc",
  age: 30,
  birthday: "yesterday",
};

// let { name, age } = {
//   name: "nbc",
//   age: 30,
// };

// console.log(name); // nbc

// 새로운 이름으로 할당
// let { name: newName, age: newAge } = user;

// console.log(newAge); // 30

// let { name, age, birthday = "today", number = 3942, address } = user;
// console.log(birthday); // yesterday
// console.log(number); // 3942
// console.log(address); // undefined
