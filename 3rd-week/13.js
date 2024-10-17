// 예시 1

function Student(name, gender, school) {
  this.name = name;
  this.gender = gender;
  this.school = school;
}

function Employee(name, gender, company) {
  this.name = name;
  this.gender = gender;
  this.company = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");

// ------------------------------------------------
// 위 코드보다 재사용성 향상

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

function Employee(name, gender, company) {
  Person.call(this, name, gender);
  this.company = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");

// 예시 2

// 가독성도 안 좋고 길다.
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]); // 10
numbers.forEach(function (number) {
  // 현재 돌아가는 숫자보다 max보다 큰 경우
  if (number > max) {
    max = number;
  }

  if (number < min) {
    min = number;
  }
});

// console.log(max, min); // 45 3

//---------------------------------------------
var numbers2 = [10, 20, 3, 16, 45];

// apply ->({},[])

var max = Math.max.apply(null, numbers2);
var min = Math.min.apply(null, numbers2);

// Math.max는 원래 배열을 비교하는 것이 아닌 숫자의 나열들을 비교하는 것

// console.log(max, min); // 45 3
//-------------------------------
// 가장 많이 사용되는 방법

var max = Math.max(...numbers2);
var min = Math.min(...numbers2);

// console.log(max, min); // 45 3

//===================

// bind 메서드
// -> this를 바인딩 하는 메서드
// call,apply와는 좀 달라요! 즉시 호출하지는 않아요.

// 목적
// 1. 함수에 this를 '미리' 적용해요.
// 2. 부분 적용 함수!

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

// func(1, 2, 3, 4); // 글로벌 객체

// 함수에 this를 미리 적용!
var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7); // { x: 1 } 4 5 6 7

// name 프로퍼티!!
// 'bound'라는 접두어! : bind의 수동태
console.log(func.name); // func
console.log(bindFunc1.name); // bound func
console.log(bindFunc2.name); // bound func
