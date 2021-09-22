// 타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미합니다.

//인터페이스와 타입 별칭의 차이점은 다음과 같다.
//특정 타입의 별칭을 바로 보여주는 것이 타입 별칭이며, 이는 상속이 되지 않는다.
//그에 반해 인터페이스는 상속이 가능하다. 그래서 가능한 인터페이스로 선언하는 게 좋다라는 것이 js공식 문서에 나와있다.
// interface Person {
//     name:string;
//     age: number;
// }
type Person1 = {
    name:string;
    age: number;
}

var seho: Person1 ={
    name:'세호',
    age: 30
}

type myString = string;
var str1:myString = 'hello';

type Todo = {id: string; title:string, done: boolean};
function getTodo(todo: Todo){};     //이런식으로 입력인자에도 넣을 수 있다.