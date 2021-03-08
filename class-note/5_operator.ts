function logMessage(value: string | number){    //Union type : 두 가지 이상의 타입을 사용하고 싶을 때 유니온 타입을 사용한다.
    console.log(value);
}
logMessage('hello');
logMessage(100);

var seho1 : string | number | boolean;
function logMessage1(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage1('hello');
logMessage1(100);

interface Developer2{
    name: string;
    skill: string;
}
interface Person2{
    name: string;
    age: number;
}

function askSomeone(someone: Developer2 | Person2){
    someone.name;    //Developer2와 Person2의 속성 모두 접근가능한 것이 아니다. 공통된 속성인 name만 접근가능하다.
    //아직 둘 중 어떤 타입이 들어올지 결정된 것이 아니기 때문에 공통되지 않은 속성을 사용하는 것은 불가능하다.
}

var seho2 : string | number | boolean;
// 인터섹션 타입
// var capt1 : string & number & boolean;   //string도 만족하고 number도 만족하고 boolean도 만족하는 타입을 말한다.(한마디로 불가능한 타입이므로 오류가 난다.)
function askSomeone1(someone: Developer2 & Person2){
    someone.name;       //Developer2와 Person2를 동시에 만족하는 타입이니 name,age,skill 속성을 모두 사용할 수 있다.
    someone.age;
    someone.skill;
}

// 유니온 타입과 인터섹션 타입 비교

askSomeone({name : '디벨로퍼', skill: '웹 개발'});
askSomeone({name : '캡틴', age: 100});
// 유니온 타입은 두 개의 타입이 사용될 수 있다.

// askSomeone1({name : '디벨로퍼', skill: '웹 개발'});
// askSomeone1({name : '캡틴', age: 100});
// 인터섹션 타입에선 두 개의 타입이 사용될 수 없다.(Developer2와 Person2 타입을 모두 만족해야 한다.)
// Developer2와 Person2의 합집합인 새로운 타입을 만들어야 한다.