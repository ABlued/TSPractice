// 타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다.
interface Developer2{
    name:string;
    skill:string;
}

interface Person2{
    name:string;
}

let developer : Developer2;
let person : Person2;
// developer = person;      // Developer2 안에 있는 속성 중에 Person2에 없는 속성이 있기 때문에 초기화할 수 없다.

person = developer;     // Person2에 있는 속성들은 Developer2에 다 있기 때문에 초기화할 수 있다.

// 그래서 서로 다른 것을 초기화하려할 때 그 두 개의 객체는 타입이 호환이 되는지 생각하고 코딩해야한다.

// 함수
let add = function(a: number) {
    console.log(a);
}

let sum = function(a: number, b: number){

}

// sum 함수는 add 함수보다 구조가 더 크다라고 볼 수 있다.

// add = sum;   // 그러므로 add함수에 sum 함수를 초기화할 수 없다. add 함수가 구조적으로 더 작기 때문이다.

sum = add;      // 역은 성립된다. sum 함수가 구조적으로 더 크기 때문이다.

// 제네릭
interface Empty<T>{
    
}
let empty1: Empty<String>;
let empty2: Empty<number>;
empty1 = empty2;        // Empty 인터페이스엔 로직이 정의되어 있지 않으니 같은 타입이므로 서로 호환이 가능하다.
empty2 = empty1;

interface NotEmpty<T>{
    data: T;    
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// notempty1 = notempty2;       // NotEmpty의 데이터타입이 서로 다르므로 같은 타입인데도 불구하고 서로 호환이 되지않는다.
// notempty2 = notempty1;