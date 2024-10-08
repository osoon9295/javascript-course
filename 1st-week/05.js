// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적
// 1-1. 문자열
let result1 = 1 + "2";
// console.log(result1); // 12
// console.log(typeof result1); // string

let result2 = "1" + true;
// console.log(result2); // 1true
// console.log(typeof result2); // string

// {}, null, undefined + "1" => 문자열

let result0 = "1" + undefined;
// console.log(result0); // 1undefined

// 1-2. 숫자
let result3 = 1 - "2";
// console.log(result3); // -1
// console.log(typeof result3); // number

let result4 = "2" * "3";
// console.log(result4); // 6
// console.log(typeof result4); // number

// 2. 명시적 형 변환
// 2-1. Boolean
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log("--------------");
// console.log(Boolean("false")); // true
// console.log(Boolean({})); // true

// 2-2. 문자열
let result5 = String(123);
// console.log(typeof result5);

let result6 = String(true);
// console.log(typeof result6);

let result7 = String(false);
// console.log(typeof result7);

let result8 = String(null);
// console.log(typeof result8);

let result9 = String(undefined);
// console.log(typeof result9);

//  2-3. Number

let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
