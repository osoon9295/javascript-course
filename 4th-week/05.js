// obj
// 2가지 속성

var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log("-----------");
    if (this === global) {
      console.log("this가 global입니다.");
    } else {
      console.log(this, v, i);
    }
    console.log("-----------");
  },
};

// method로서 호출
// obj.logValues(1, 2); // { vals: [ 1, 2, 3 ], logValues: [Function: logValues] } 1 2

// forEach, map, filter : 두번째 매개변수는 모두 index
[4, 5, 6].forEach(obj.logValues);
