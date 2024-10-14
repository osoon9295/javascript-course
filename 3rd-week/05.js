var n = null;
console.log(typeof n); // object : 자바스크립트의 유명한 버그

// 동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

// 일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
