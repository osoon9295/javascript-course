// 객체
// key-value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log(person2.name);

// 3. 객체 메소드 (객체가 가진 여러가지 기능 :  Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드

let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let keys = Object.keys(person);
// console.log("keys=>", keys); // keys=> [ 'name', 'age', 'gender' ]

// 3-2. Object.values()
let values = Object.values(person);
// console.log("values=>", values); // values=> [ '홍길동', 30, '남자' ]

// 3-3. entries :  key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
// console.log("entries=>", entries); // entries=> [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. assign : 객체 복사
let newPerson = {};
Object.assign(newPerson, person, { age: 20, gender: "여자" });
// console.log("newPerson=>", newPerson); // { name: '홍길동', age: 20, gender: '여자' }

// 3-5. 객체 비교

// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자",
// };

// let str1 = "aaa";
// let str2 = "aaa";

// console.log(person1 === person2); // false => 왜? 객체는 크기가 크다 -> 메모리에 저장할때 별도의 공간에 저장 -> 그 공간의 주소를 저장해두기 때문에 두개의 주소는 다르기 때문에 false
// console.log(str1 === str2); // true => 직접저장이기 때문에

// console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true

// 3-6. 객체 병합
// ... :  spread operator

let person1 = {
  name: "홍길동",
  age: 30,
};

let person2 = {
  name: "홍길동",
  gender: "남자",
};

let perfectMan = { ...person1, ...person2 };
console.log(perfectMan); // { name: '홍길동', age: 30, gender: '남자' }
