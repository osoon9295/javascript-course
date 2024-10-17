// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행

var count = 0;

// var timer = setInterval(function () {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// }, 300);

var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

// var timer = setInterval(cbFunc, 300);
// cbFunc();
