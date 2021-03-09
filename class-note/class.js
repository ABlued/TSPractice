// ES2015 (ES6)
class Person3{
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var capt1 = new Person3('캡틴', 30);      //생성 되었습니다 출력됨
console.log(capt);

function Person4(name, age){        //생성자 함수 : 위에 Person3 클래스와 같다.
    this.name = name;
    this.age = age;
}
var capt2 = new Person4('캡틴',30);