// Static Method(=정적 메서드)
// Class -> 객체를 만들기 위해서 사용하죠!!
// 다량으로, 안전하고, 정확하게

class Calculator {
  static add(a, b) {
    console.log("[계산기] 더하기를 진행합니다.");
    return a + b;
  }
  static substract(a, b) {
    console.log("[계산기] 빼기를 진행합니다.");
    return a - b;
  }
}

console.log(Calculator.add(3, 5));
console.log(Calculator.substract(3, 5));
