// Set
// 자료 구조 중 하나
// 고유한 값을 저장하는 자료구조다.
// 값만 저장한다.
// 키를 저장하지는 않는다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// 1. 값 추가
const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value4");
mySet.add("value8");

// 2. 검색
// console.log(mySet.size); // 2

// mySet.add("value2");

// console.log(mySet.size); // 2 : 중복된 값은 합쳐져서

// 2. 존재 여부 확인
// console.log(mySet.has("value1")); // true
// console.log(mySet.has("value2")); // true
// console.log(mySet.has("value3")); // false

// 3. iterator, 반복
for (const value of mySet.values()) {
  console.log(value); // value1 value2 value4 value8 한 줄씩 출력
}
