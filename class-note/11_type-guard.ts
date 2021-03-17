interface Developer1{
    name: string;
    skill: string;
}

interface Person1{
    name: string;
    age: number;
}

function introduce(): Developer1 | Person1{
    return {name: 'Tony', age: 33, skill:'Web Developer'};
}

let tony = introduce();
// console.log(tony.skill);     // introduce는 유니온 타입을 반환하므로 Developer1와 Person1의 공통된 속성만 접근 가능하므로 skill을 접근하려하면 오류가 난다.

// 타입 단언을 사용 시

if((tony as Developer1).skill){     // 이런식으로 타입 단언을 한다면 skill 속성을 접근할 수 있다.
    let skill = (tony as Developer1).skill;
    console.log(skill);
} else if ((tony as Person1).age){
    let age = (tony as Person1).age;
    console.log(age);
}       // 그런데 타입 단언으로 접근하면 매번 접근할때마다 단언을 해야하는 코드가 중복이 된다. 

// 타입 가드를 사용 시

function isDeveloper(target: Developer1 | Person1): target is Developer1 {
    return (target as Developer1).skill !== undefined;      // target 안에 skill이라는 속성이 존재할 때 target은 Developer1 객체이며 이를 반환한다..
}

if(isDeveloper(tony)){
    console.log(tony.skill);       // 타입 가드를 사용하게 되면 그 함수가 적절히 반환되었을 경우 skill이라는 속성에 접근할 수 있지만
} else {
    console.log(tony.age);      // 그 함수가 적절히 반환되지 못했을 경우 Developer1을 제외하면 Person1 밖에 없으니 age라는 속성에 접근할 수 있게 된다.
}