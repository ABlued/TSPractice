// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

let number: number = 10;
let arr: Array<number> = [1,2,3];       //이 배열안에는 number타입만 들어갈 수 있다.
let heroes: Array<string> = ['Capt','Thor', 'Hulk'];

let items: number[] = [1,2,3];      //이런 식으로 더 간단하게 선언할 수 있다.

//TS 튜플
let address: [string, number] = ['gangnam',100];

//TS 객체
let obj : object = {};
let person: object = {
    name: 'capt',
    age: 100
};
let person1: {name:string, age:number} = {      //들어갈 속성에 타입도 지정 가능하다
    name: 'thor',
    age: 1000
};

// TS 진위값
let show: boolean = true;