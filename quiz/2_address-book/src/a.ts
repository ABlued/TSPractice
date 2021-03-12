function fecthItems(): string[]{
    var items = ['a','b','c'];
    return items;
}       // 이런식으로 함수내에서 어떤 타입을 반환하는지 바로 알 수 있는 동기적인 코드는 굳이 반환형 string[]을 쓰지 않아도 타입스크립트 내에서 추론을 하게 된다.
let result = fecthItems();
console.log(result);

function fecthItems1():Promise<string[]>{
    let items: string[] = ['a','b','c'];
    return new Promise(function(resolve){
        resolve(items);
    })
}       //이런식으로 promise를 사용한 비동기적인 코드를 사용하면 타입추론이 안된다.
        //반환타입은 Promise<unknown>이 된다.
fecthItems1();
