function sum(a: number, b: number){
    return a + b;
}
sum(10, 20);        //함수인자에 number를 입력했기 때문에 반환값 타입을 지정하지 않아도 number로 타입추론이 된다.

// 함수의 반환 값에 타입을 정의하는 방식
function add(a: number, b: number):number{
    return a + b;
}

function sum1(a: number, b = 100): number {
    return a + b;
}
console.log(sum1(20));
//sum(10,20,30,40);     //ts에서는 함수인자보다 더 많은 함수인자를 입력하면 오류가 난다.
//sum(10);      //(더 적은 함수인자를 넣어도 오류가 난다.)
function log(a:string, b?:string, c?:string){       //함수인자를 선택적으로 사용하고 싶다면 인자옆에 ? 를 붙인다

}
log('hello world');
log('hello ts', 'abc');
log('hello ts', 'abc','def');