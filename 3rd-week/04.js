// user 객체를 생성

var user = {
  name: "boyoung",
  gender: "female",
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값: 변경대상 user 객체, 변경하고자 하는 이름
// 출력값: 새로운 user 객체
// 특징: 객체의 프로퍼티(속성)에 접근해서 이름을 변경했네요! -> 가변

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 가변이기 때문에 user1도 영향을 받게 될거에요.
var user2 = changeName(user, "boone");

// 결국 아래 로직은 skip하게 될겁니다.
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 뜨지않는다.
}

console.log(user.name, user2.name); // boone boone
console.log(user === user2); // true

// -------------------------------------------------------- 비교

// user 객체를 생성

var user = {
  name: "boyoung",
  gender: "female",
};

// 이름을 변경하는 함수 정의
// 입력값: 변경대상 user 객체, 변경하고자 하는 이름
// 출력값: 새로운 user 객체
// 특징: 객체의 프로퍼티(속성)에 접근하는 것이 아니라, 아에 새로운 객체를 반환 -> 불변

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 가변이기 때문에 user1도 영향이 없어요!
var user2 = changeName(user, "boone");

// 결국 아래 로직이 수행되겠네요.
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // boone boone
console.log(user === user2); // false

// --------------------------------------------------------

// 이런 패턴은 어떨까요?

var copyObject = function (target) {
  var result = {};

  // for ~in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 하지 않아도 괜찮아요.
  // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 되겠죠?

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "boyoung",
  gender: "female",
};

var user2 = copyObject(user);
user2.name = "boone";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다. "); // 로직 수행됨
}

console.log(user.name, user2.name); // boyoung, boone
console.log(user === user2); // false

// -------------
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};
