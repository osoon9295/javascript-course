// 데이터 타입
// runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 옆에 터미널에 코드가 실행될 때
// 그 때, 데이터 타입 결정

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 1-3. 지수형 (Exp)
let num3 = 2.5e5; // 2.5x10^5
console.log(num3);
console.log(typeof num3);

// 1-4. NaN
// NaN :  Not a Number
let num4 = "Hello" / 2;
console.log(num4);

// 1-5. Infinity(무한대)
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

// 1-6. -Infinity(무한대)
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);
