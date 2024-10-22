// 클래스 연습해보기!

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//     다음 네 개의 값이 필수로 입력되야 합니다!
//     (1) modelName
//     (2) modelYear
//     (3) type : 가솔린, 전기차, 디젤
//     (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드를 작성해주세요.
// 3. 이후 자동차를 3개 정도 만들어주세요 (객체 생성)
//

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName} : 빵!`);
  }

  //
  printModelYear() {
    console.log(`${this.modelName}: ${this.modelYear}년도 모델입니다.`);
  }
}

// 자동차 만들기
const car1 = new Car("dd", "2024", "전기차", "삼천만원");
const car2 = new Car("ee", "1999", "가솔린", "이천만원");
const car3 = new Car("xx", "2010", "전기차", "오천만원");

car1.makeNoise();
car2.makeNoise();
car3.makeNoise();
car1.printModelYear();
car2.printModelYear();
car3.printModelYear();
