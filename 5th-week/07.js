// 상속(Interitance)
// Class -> 유산으로 내려주는 주요 기능!!
// 부모 <-> 자식

// 동물 전체에 대한 클래스

// class Animal {
//   // 생성자
//   constructor(name) {
//     this.name = name;
//   }

//   // 메서드(짖다)
//   speak() {
//     console.log(`${this.name} says!`);
//   }
// }

// class Dog extends Animal {
//   // 부모에게 내려받은 메서드를 재정의할 수 있음
//   // overriding...
//   speak() {
//     console.log(`${this.name} barks!`);
//   }
// }

// const cuttyPuppy01 = new Dog("복실이");
// cuttyPuppy01.speak();

// ------------------------------------------------

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

// [추가 요구사항]
// 1. 전기차 클래스 <- Car 클래스의 상속을 받을 거에요!

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

// 전기차 Class 정의

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car(부모 class)에게도 알려주기!!
    super(modelName, modelYear, "e", price);
    this._chargeTime = chargeTime;
  }

  set chargeTime(value) {
    this._chargeTime = value;
  }

  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("-------------------------");
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);

// 자동차 만들기
// const car1 = new Car("dd", "2024", "전기차", "삼천만원");
// const car2 = new Car("ee", "1999", "가솔린", "이천만원");
// const car3 = new Car("xx", "2010", "전기차", "오천만원");

// car1.makeNoise();
// car2.makeNoise();
// car3.makeNoise();
// car1.printModelYear();
// car2.printModelYear();
// car3.printModelYear();
