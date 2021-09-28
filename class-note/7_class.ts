class Person5{
    name: string;       //ts에서는 생성인자들을 모두 타입을 명시해야 한다.
    age: number;
    // private name : string;       //ts에서는 변수 접근 범위도 설정할 수 있다.
    // public age : number;
    readonly log : string;      //readonly : 값을 읽을 수만 있고 쓸 수는 없다.
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
const persona: Person5 = new Person5('amy',12);

// 위의 클래스 문법과 같다
function PersonFunction(name,age) {
    this.name = name;
    this.age = age;
}

// 리액트 예전 문법
// class App extends React.Component{

// }

// 리액트 최신 문법 - 훅 기반의 함수형 코드

// function App(){
//     return <div>Hello wolrd </div>
// }

// 최신 리액트나 뷰에서는 클래스 기반의 코드를 짜고 있지 않은 추세이다.