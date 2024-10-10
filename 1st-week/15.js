// 1. while
// ~하는 동안 , for문과 유사

// while (조건) {} vs for (초기값; 조건; 증감) {}

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// while문을 활용하여, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 4;

// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i);
//   }
//   i++; // 중요해요! : 없으면 계속 3이기 때문에 무한루프
// }

// 2. do~while
// while문의 경우 메인로직이 while문 안에 작성 -> 조건을 먼저 접한다.
// do~while문의 경우 메인로직이 do 안에 작성 -> 무조건 한번은 실행된다. 조건만 while과 함께 쓰인다.

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// 3. break :  for문과 함께 쓰인다. for문을 멈춘다.

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i); // 0부터 4까지 나온다
// }

// 4. countinue :  for문과 함께 쓰인다. 그 다음 순서로 넘어간다.
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // 5를 제외한 0부터 10이 나온다
}
