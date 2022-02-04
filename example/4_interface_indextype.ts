/**
 * 인터페이스에서속성 이름을 구체적으로 정의하지 않고 값의 타입만 정의하는
 * 것을 인덱스(index)타입이라 한다.
 */

interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number;
}

const p1: Person = {
  name: 'mike',
  birthday: '1997-01-01', // 컴파일 에러가 발생되지 않는다.
  age: 25,
};

// 여러 개의 인덱스를 정의하는 경우

interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number; // 여기서 숫자인덱스는 결국에는 문자인덱스로 접근을 해야하므로, string 인덱스는 number인덱스의 타입도 허용해야한다.
  // [year: string]: string;  // 이럴 경우 에러가 일어난다.
}

const yearMap: YearPriceMap = {};

yearMap[1992] = 100;
yearMap['2000'] = 1234;
// yearMap['1992'] = '200'; // 타입 에러
