// 타입 단언(type assertion)
let a;
a = 'a';
let b = a;      // 이런식으로 타입이 도중의 초기화되면 타입추론이 자세하지 않고 any로 추론이 된다.
let c = a as string;        //이렇게 as이 타입 단언을 선언하면 string으로 추론이 된다. 타입추론시스템보다 개발자의 추론한 타입이 정확할 경우 타입 단언을 쓰는 것이다.

// DOM API 제작
// <div id="app">hi</div>
let div = document.querySelector('div');        // HTMLDivElement로 타입 추론하게 된다.
if(div){        // div가 없을수도 있으니 이렇게 존재할경우 로직이 가동되도록 한다. 왜냐하면 querySelector() 함수는 HTMLDivElement와 null을 동시에 받을 수 있는 함수이기 때문이다.
    //그러므로 null일 올 경우도 있으니 타입스크립트에선 먼저 이 함수가 null을 받을 수 있는 경우를 제외하는 로직을 짠 다음 사용해야 한다.
    // div.innerText
}

let div1 = document.querySelector('.container') as HTMLDivElement;      //이런식으로 HTMLDivElement 타입으로 단언시켜 null로 받을 경우를 제외하는 것이 좋다.
div.innerText = '';