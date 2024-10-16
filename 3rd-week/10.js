// 런타임
// run+time
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this는 -> 노드(global객체), 브라우저(window객체)

var obj1 = {
  outer: function () {
    console.log(this); // {outer: [Function:outer]}
    var innerFunc = function () {
      console.log(this); // 글로벌 객체 // { innerMethod: [Function: innerFunc] }
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};

obj1.outer();
