// 2. 문자 :  string(문자열=문자의 나열)
// '',""

let str = "Hello World";
// console.log(str); // Hello World
// console.log(typeof str); // string

// 2-1. 문자열 길이 확인하기
// console.log(str.length); // 11

// 2-2. 문자열 결합하기 (concatenation)
let str1 = "Hello, ";
let str2 = "world";
let result = str1.concat(str2); // Hello, world
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World";
// console.log(str3.substr(7, 5)); // 시작위치, 해당문자열수 World
// console.log(str3.slice(7, 12)); // 시작위치, 끝위치 World

// 2-4. 문자열 검색
let str4 = "Hello, World1";
// console.log(str4.search("World")); // 7

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result2 = str5.replace("World", "JavaScript");
// console.log(result2); // Hello, JavaScript!

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result3 = str6.split(",");
console.log(result3); // [ 'apple', ' banana', ' kiwi' ]
