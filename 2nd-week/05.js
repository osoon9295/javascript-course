// Map
// JavaScript => 객체, 배열 : 많고, 다양하고, 복잡한 프로그램 생성
// 그럼에도 현실세계 반영은 어려움

// Map, Set 추가적인 자료구조가 등장!

// 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다

// 1. Map
// - Key/Value
// - Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// - Map은 키가 정렬된 순서로 저장되기 때문
// > 검색, 삭제, 제거, 여부 확인

// const myMap = new Map(); // 맵을 만드는 방법
// myMap.set("key", "value"); // 맵에 데이터를 넣는 방법
// myMap.get("key");
// 반복 중요 -> method : keys,values, entries

const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }
// for (const key of myMap.keys()) {
//   console.log(key); // for문 처럼 one two three 한 줄씩 출력
// }

// console.log(myMap.values()); // [Map Iterator] { 1, 2, 3 }
// for (const value of myMap.values()) {
//   console.log(value); // for문 처럼 1 2 3 한줄씩 출력
// }

// console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
// for (const entry of myMap.entries()) {
//   console.log(entry); // [ 'one', 1 ] [ 'two', 2 ] [ 'three', 3 ] 한 줄씩 출력
// }

console.log(myMap.size); // 3 : map의 사이즈(길이)
console.log(myMap.has("two")); // true : key 기반 검색
