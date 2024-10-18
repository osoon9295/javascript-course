// *가 붙은 함수가 제너레이터 함수입니다.
// 이 함수를 실행하면 => Iterator객체가 반환됩니다.

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
// var addCoffee = function (prevName, name) {
//   setTimeout(function () {
//     coffeeMaker.next(prevName ? prevName + ", " + name : name);
//   }, 500);
// };

// (2) 제너레이터 함수 선언!!
// yield 키워드로 순서 제어
// var coffeeGenerator = function* () {
//   var espresso = yield addCoffee("", "에스프레소");
//   console.log(espresso);
//   var americano = yield addCoffee(espresso, "아메리카노");
//   console.log(americano);
//   var mocha = yield addCoffee(americano, "카페모카");
//   console.log(mocha);
//   var latte = yield addCoffee(mocha, "카페라떼");
//   console.log(latte);
// };
// var coffeeMaker = coffeeGenerator();
// coffeeMaker.next();

//--------------------------------------

// Promise
// 이전에 썼던 방법 : then(그러면~)
// 이번에 쓸 방법 : async(비동기)/await(기다리다)

// coffeeMaker 함수에서 호출할 함수, 'addCoffee'를 선언
// Promise를 반환
var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

// ***
var coffeeMaker = async function () {
  // var coffeeMaker = async () => {}
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };

  // promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때 까지 기다린다.
  // _addCoffee("에스프레소") 이 로직이 실행되는데 100초가 걸렸다.
  await _addCoffee("에스프레소");

  // console.log는 100초 뒤 실행...
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};
coffeeMaker();
