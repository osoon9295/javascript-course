//  배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
// let number = new Array(5); // 5개의 요소를 갖고있는 배열을 만들어줘
// console.log(number); // [ <5 empty items> ]

// console.log(fruits.length); // 3

// 2. 요소 접근
// console.log(fruits[0]); // 사과

// 3. 배열 메소드
// 3-1. push : 맨 뒤에 추가
// let fruits = ["사과", "바나나"];
// console.log("전", fruits); // 전 [ '사과', '바나나' ]
// fruits.push("오렌지");
// console.log("후", fruits); // 후 [ '사과', '바나나', '오렌지' ]

// 3-2. pop : 마지막 요소 삭제
// let fruits = ["사과", "바나나"];
// console.log("전", fruits); // 전 [ '사과', '바나나' ]
// fruits.pop();
// console.log("후", fruits); // 후 [ '사과' ]

// 3-3. shift : 첫번째 요소 삭제
// let fruits = ["사과", "바나나", "키위"];
// console.log("전", fruits); // 전 [ '사과', '바나나', '키위' ]
// fruits.shift();
// console.log("후", fruits); // 후 [ '바나나', '키위' ]

// 3-4. unshift : 맨 앞에 추가
// let fruits = ["사과", "바나나", "키위"];
// console.log("전", fruits); // 전 [ '사과', '바나나', '키위' ]
// fruits.unshift("포도");
// console.log("후", fruits); // 후 [ '포도', '사과', '바나나', '키위' ]

// 3-5. splice : 위치를 지정해서 어디까지 삭제하고 "포도"를 넣어줘
// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도");
// console.log(fruits); // [ '사과', '포도', '키위' ]

// 3-6. slice
// let slicedFruits = fruits.slice(1, 2);
// console.log(slicedFruits); // [ '포도' ]
