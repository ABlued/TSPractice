/**
 * 타입 호환성은 어떤 타입을 다르 타입으로 취급해도 되는지 판단하는 것이다.
 * 정적 타입 언어의 가장 중요한 역할은 타입 호환성을 통해 컴파일 타임에 호환되지 않는 타입을 찾아내는 것이다.
 * 어떤 변수가 다르 변수에 할당 가능하기 위해서는 해당 변수의 타입이 다르 쪽 변수의 타입에 할당 가능해야 한다.
 */

/**
 * 타입스크립트는 값 자체의 타입보다는 값이 가진 내부 구조에 기반해서 타입 호환성을 검사한다.
 * 이를 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 부르다.
 * 구조적 타이핑인 이유는 동적 타입 언어인 자바스크립트를 기반으로 하기 때문이다.
 */

/**
 * 인터페이스 A가 인터페이스 B로 할당 가능하려면 다음 조건을 만족해야 한다.
 *
 * 1. B에 있는 모든 필수 속성의 이름이 A에도 존재해야 한다.
 * 2. 같은 속성 이름에 대해, A의 속성이 B의 속성에 할당 가능해야 한다.
 */

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  age: number;
}
// Person과 Product는 이름이 다르지만 내부 모든 속성 이름과 타입이 같다.
const person: Person = { name: 'mike', age: 23 };
const product: Product = person;
// 그러므로 서로 할당이 가능하다.

// 서로 할당이 불가능한 경우

interface NotSamePerson {
  name: string;
  age?: number;
}
const notSamePerson: NotSamePerson = { name: 'mike' };
// const product1: Product = notSamePerson; // 타입 에러
// 이런식으로 서로 같지 않은 내부 구조를 이룬 타입들은 할당이 불가능하다.

// 함수의 타입 호환성

// 함수를 호출하는 시점에 문제가 없어야 할당 가능하다. 다음은 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건이다.

/**
 * 1. A의 매개변수 개수가 B의 매개변수 개수보다 적어야 한다.
 * 2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
 * 3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.
 */

type F1 = (a: number, b: string) => number;
type F2 = (a: number) => number;
type F3 = (a: number) => number | string;

let f1: F1 = (a, b) => 1;
let f2: F2 = (a) => 1;
let f3: F3 = (a) => 1;
f1 = f2;
// f2 = f1; // F2보다 F1의 매개변수 개수가 더 많으므로 F1은 F2로 할당 가능하지 않다.
// f2 = f3; // F3의 반환 타입은 F1의 반환 타입으로 할당 가능하지 않으므로 F3은 F2로 할당 가능하지 않다.

// map 메소드의 매개변수

function addOne(value: number) {
  return value + 1;
}

const result = [1, 2, 3].map<number>(addOne);
// (value : number, index: number, array: number[]) => number  // map 메서드가 입력받는 함수의 타입이다.

/**
 * addOne 함수는 map 메소드의 매개변수로 할당 가능하다. map 메소드의 제네릭으로 입력한 number는 매개변수 함수의 바환 타입을 의미한다.
 * 앞에서의 조건을 배열의 map 메소드 입장에서 생각해 보자
 */

/**
 * 1. map 메소드는 세 개의 매개변수를 넘겨주는데, 네 개의 매개변수를 사용하는 함수가 할당되면 문제가 된다.
 * 네 번째 매개변수가 전달되지 않기 때문이다.
 * 2. 만약 addOne 함수의 매개변수 타입이 1 | 2 | 3 이라면 문제가 도니다. map 메소드는 다르 숫자도 전달할 수 있기 때문이다.
 * 3. 만약 addOne 함수의 반환 타입이 number | string이라면 문제가 된다. map 메소드는 숫자 배열을 반환해야 하기 때문이다.
 */
