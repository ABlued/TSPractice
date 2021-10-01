// mapped 타입은 자바스크립트에 map과 같다. 반복문이라 생각하면 된다.
type Heroes = 'Hulk' | 'Capt' | 'Thor'
// 사용법 [value in  반복 가능한 데이터]:출력
type HeroAges = { [K in Heroes]:number }   // 기본 형태
// 출력
// type HeroAges = {
//     Hulk:number;
//     Capt:number;
//     Thor:number;
// }

const ages: HeroAges = {
    Hulk:33,
    Capt:100,
    Thor:1000
}   // 각 타입에 맞게 설정해줘야하는 것은 같다.