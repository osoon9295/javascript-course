// 연산자(+,-,*,/,%)

// 1. 더하기 연산자
// console.log(1 + 1); // 2 -> 숫자
// console.log(1 + "1"); // 11 -> 문자열 :  +연산자만 문자열을 먼저 인식한다.

// 2. 빼기 연산자
// console.log(1 - 2); // -1 -> 숫자
// console.log(1 - "2"); // -1 -> 숫자 : -연산자의 경우 숫자로 먼저 인식된다.

// 3. 곱하기 연산자(*)
// console.log(2 * 3); // 6 -> 숫자
// console.log("2" * 3); // 6 -> 숫자

// 4. 나누기 연산자(/)
// console.log(4 / 2); // 2 -> 숫자
// console.log("4" / 2); //2 -> 숫자

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
// console.log(5 / 2); // 2.5
// console.log(5 % 2); // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10; // x변수에 10을 할당했다.
// console.log(x);

// 6-2. 더하기 등호 연산자 (+=)
x += 5; // 10 :  x = x+5
// console.log(x); // 15
x += 5;
// console.log(x); // 20

// 6-3. 빼기 등호 연산자 (-=)
x -= 5; // 15 : x= x-5
// console.log(x);

// 6-3. 곱하기 등호 연산자 (*=)
let a = 10;
a *= 2; // 20 : 곱하기+재할당
// console.log(a);

// 7. 비교연산자⭐️ : true 또는 false를 반환하는 연산자
// 7-1. 일치 연산자 (===)
// 타입까지 일치해야 true를 반환하는 연산자
// console.log(2 === 2); // true
// console.log("2" === 2); // false

// 7-2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
// console.log(2 !== 2); // false
// console.log("2" !== 2); //true

// 7-3. 작다 연산자 (<), 작거나 같다 연산자
// console.log(2 < 3); // true
// console.log(2 <= 3); // true
// console.log(4 <= 3); // false

// 8. 논리 연산자
// 8-1. 논리곱 연산자 : 모두 true여야 true(하나라도 false면 false)
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// 8-2. 논리 합연산자 : 두 값중 하나라도 true인 경우 true
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// 8-3. 논리부정 연산자(!) : 값을 반대로 바꿈
// console.log(!true); // false
let b = true;
// console.log(!a); // false

// 9. 삼항 연산자⭐️⭐️⭐️ : 조건에 따라 값을 선택한다.
let c = 10;
let result = c > 5 ? "크다" : "작다";
// console.log(result); // 크다

let d = 20;
let result2 = d < 10 ? "작다" : " 크다";
// console.log(result2); // 크다

// 10. 타입연산자 (typeof)
// console.log(typeof "5"); // string
