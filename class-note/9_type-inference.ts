// 변수, 함수 타입 추론
var a = 10;     // 타입스크립트 또한 초기화한 값을 보고 타입을 추론한다. 굳이 number라고 명시를 하지않아도 암묵적으로 number타입이 된다.

function getB(b){       // 함수 또한 그렇다. 아무것도 명시하지 않으면 암묵적으로 any타입을 입력값을 받고 any타입을 반환한다
    return b;
}

function getB1(b = 10){     // 이렇게 디폴트로 number타입이 10이라고 지정하면 입력값과 반환값 또한 number로 타입추론이 된다.
    var c = 'hi';
    return b;               // return b + c; 이렇게 number와 string을 더해주면 string으로 타입이 반환된다. b + c = "10c"
}

// 인터페이스, 제네릭 타입 추론
interface Dropdown1<T>{
    value: T;
    title: string;
}

var shoppingItem: Dropdown1<string> = {
    value: 'abc',
    title: 'hello'
}
 
 // 복잡한 제네릭 타입 추론
 
interface Dropdown2<T>{
     value: T;
     title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K> {       // K가 tag와 Dropdown2의 value 타입도 결정한다.
     description: string;
     tag: K;
}

 var detailedItem1: DetailedDropdown<string> = {        // tag와 value가 자동적으로 string으로 타입 추론이 된다.
     title: 'abc',
     description: 'ab',
     value: 'a',
     tag: 'a'
}

// Best Common Type : common Type 타입스크립트가 해당 코드를 어떤 타입인지 매겨나가는 알고리즘이다
let arr = [1,2,true];     //타입스크립트가 이 배열은 number | boolean 유니온 타입으로 추론한다.

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    console.log(mouseEvent.kangaroo); //<- Error!
};

// 타입스크립트는 onmousedown에 할당되는 함수의 타입을 추론하기위해 onmousedown 속성의 타입을 추론하게 됩니다.
// 타입 추론은 곧 마우스 이벤트와 연관이 있다고 추론하기 때문에 mouseEvent 속성엔 button 속성이 있지만 Kangaroo 속성을 없으므로 오류가 나게 됩니다.
