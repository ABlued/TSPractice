// TypeScript에서는 타입 표기가 없는 경우 타입 정보를 제공하기 위해 타입을 추론합니다.
var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}
// interface 타입 추론
interface Dropdown<T> {
  value: T
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

// 제네릭을 두 개 연동해서 타입 추론
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}

// Best Common Type : 가장 근접한 타입을 추론한다.
const arr = [1,2,true]    // 이런 식이면 배열타입은 number | boolean (유니온타입)으로 추론하게 된다. 이게 Best Common Type이다.
