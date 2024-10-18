// [ 콜백 함수 내부의 this에 다른 값 바인딩하기 ]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

// closure 방식

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; // 이 부분!
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.

// var callback = obj1.func();
// setTimeout(callback, 1000); // obj1

//------------------------------------------------------------
// 결과만을 위한 코딩 => 하드코딩... 완전 10/100점짜리 코딩
// var obj2 = {
//   name: "obj2",
//   func: function () {
//     console.log(obj2.name);
//   },
// };

// setTimeout(obj2.func, 1000); // obj2

//------------------------------------------------------------
// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; // 이 부분!
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var obj2 = {
//   name: "obj2",
//   func: obj1.func,
// };

// var callback2 = obj2.func();
// setTimeout(callback2, 1500); // obj2

//------------------------------------------------------------

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; // 이 부분!
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var obj3 = { name: "obj3" };
// var callback3 = obj1.func.call(obj3);
// setTimeout(callback3, 2000); // obj3

//------------------------------------------------------------

// bind : 새로운 함수 리턴

var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};

// var boundObj1 = obj1.func.bind(obj1);
// setTimeout(obj1.func.bind(obj1), 1000); // obj1

var obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500); // obj2
