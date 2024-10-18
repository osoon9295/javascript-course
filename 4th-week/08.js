// Promise는 비동기 처리에 대해, 처리가 끝나면 알려달라는 '약속'이에요.
// - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행되요.
// - 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우
//      resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
// - 따라서, 비동기 작업이 완료될 때 비로소 resolve,reject 호출해요.

new Promise(function (resolve) {
  setTimeout(function () {
    var name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만들어요!
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",아메리카노";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만들어요!
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",카페모카";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만들어요!
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",카페라떼";
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
