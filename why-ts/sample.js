// function sum(a,b){
//     return a + b;
// }
// sum(10, '20');      //이렇게 문자열하고 더하게되면 자바스크립트 특성상 문자열덧셈이 되어 1020이 반환된다.

// @ts-check        //js에서도 ts문법체크를 해주는 코드이다.
/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a,b){
    return a + b;
}
// sum(10,'20');    //ts-check로 인해 이 코드는 오류가 난다.