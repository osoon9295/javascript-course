// 명시적 this binding
// call, apply, bind

// 1. call
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
// no binding
// func(1, 2, 3); // 글로벌 객체, 1,2,3

// 명시적 binding
// func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method 함수 안의 this는 항상 obj!
// obj.method(2, 3); // 1 2 3

// obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// 2. apply : call과 완전 똑같지만 대괄호를 써야한다.
// func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6
// obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

// ** 유사배열
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력된다.
console.log(arr); // [ 'a', 'b', 'c' ]
