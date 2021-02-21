function add(a: number,b:number):number{
    return a + b;
}
var result = add(10,20);    //타입스크립트는 타입을 직접 명시해야하므로 sum함수 인자에 '20'같은 문자열을 넣으면 컴파일 오류가 난다.
console.log(result.toLocaleString());
