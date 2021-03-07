interface User {
    age: number;
    name: string;
}
// 변수에 인터페이스 활용
var seho: User = {      //이러면 인터페이스 타입에 맞게 속성을 지정해줘야 한다.
    age: 33,
    name: '세호'
};

//함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);   
}
const capt = {
    name:'캡틴'
}
// getUser(capt);       //capt 내엔 name속성이 없으므로 오류가 난다.

// 함수의 스팩(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

var sum2: SumFunction;
sum2 = function(a: number, b: number): number{
    return a + b;
}

// 인덱싱
interface StringArray{
    [index: number]:string;
}

var arr1: StringArray = ['a','b','c'];
// arr1[0] = 'a';     //10으로 초기화할 수 없다.

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp;       //RegExp : 정규표현식
}

var obj1:StringRegexDictionary = {
    // Test RegExp...
    // sth: /abc/,  //정규식
    cssFile: /\.css$/,      //모든 css파일을 갖고오는 정규식
    jsFile: /\.js$/,
}
// obj1['cssFile'] = 'a';        //정규식으로 초기화시켜야 한다.
Object.keys(obj).forEach(function(value) {
    
});

// 인터페이스 확장
interface Person{
    name: string;
    age: number;
}
interface Developer extends Person{
    language: string;
}

var captain: Developer = {     //확장받은 상위인터페이스까지 구현해야 한다.
    name:'캡틴',
    age: 20,
    language: 'ts'
}