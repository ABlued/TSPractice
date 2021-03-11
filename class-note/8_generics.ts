function logText(text){
    console.log(text);
    return text;
}

logText(10);    // 숫자 10
logText('하이');    // 문자열 하이
logText(true);      // 진위값 true

function logText1<T>(text:T):T{
    console.log(text);
    return text;
}

logText1<number>(10);    // 숫자 10
logText1<string>('하이');    // 문자열 하이
logText1<boolean>(true);      // 진위값 true

function logText2(text:string):string{
    console.log(text);
    text.split('').reverse().join('');
    return text;
}

function logNumber(num: number){
    console.log(num);
    return num;
}

// logText2와 logNumber는 같은 로직이지만 받는 타입만 다르다. 즉 유지보수에는 좋지 않다.
// 중복되는 로직을 줄이기 위해서 유니온 타입을 한 번 이용해보자

function logText3(text: string | number){
    console.log(text);
    //text.split('');       // 유니온 타입의 문제점은 string과 number의 교집합인 함수들만 사용할 수 있다는 것이다. split는 string함수이므로 여기서는 사용할수 없다.
    return text;
}

// 그래서 이러한 상황에서는 유니온 타입이 아닌 제네릭으로 해결하는 것이 좋다.

function logText4<T>(text:T):T{
    console.log(text);
    //text.split('');       // 유니온 타입의 문제점은 string과 number의 교집합인 함수들만 사용할 수 있다는 것이다. split는 string함수이므로 여기서는 사용할수 없다.
    return text;
}

const str = logText4<string>('hi');     //이런식으로 <string>으로 선언해 들어가는 제네릭 타입이 string인 것을 알려줘야 한다.
str.split('');      //그러면 string함수를 사용할 수 있다.
const login = logText4<boolean>(true);      //제네릭 함수에 boolean 타입이 들어갈 것이라고 알려줘야 한다.

// interface dropdown{
//     value:string;
//     selected: boolean;
// }

interface DropDown<T>{
    value:T;
    selected:boolean;
}
const obj5: DropDown<number> = {value:10, selected: false};     // 10인 number 제네릭타입에 넣었으므로 number라고 선언해야 한다.