interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품목록을 받아오기 위한 API 함수
function fetchProducts():Promise<Product[]> {
    
    return
}
// 이런 식으로 Product의 몇몇 속성만 따로 뽑아서 다시 인터페이스를 만드는 것은 효율적이지 않다. 코드중복이 많이 있기 때문이다.
interface ProductDetail{
    id: number;
    name: string;
    price: number;
}

// 2. 상품 하나의 상세정보를 받아오기 위한 API 함수 
// 그래서 Pick이란 타입을 쓰기도 한다.
// 사용법 : Pick<T K extend keyof T> T:타입, K:타입 T에 들어있는 속성 K들 
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem:ShoppingItem) {
    
}

// Omit Pick과 정반대의 개념이다. Pick은 자신이 사용하고 싶은 것만 골라내는 대신
// Omit은 사용하고 싶지 않은 것을 골라내는 것이다.
// 사용법 : Omit<T K extend keyof T> T:타입, K:타입 T에 들어있는 속성 K들 
const Phone:Omit<Product, 'brand'| 'stock'> = {
    id:3,
    name:'갤럭시',
    price:100000
}

// Parital은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
const myProduct:Partial<Product>={};        // 아무것도 지정하지 않아도 된다.
const yourProduct:Partial<Product>={id:1};      // 속성을 부분적으로 지정해도 되며
const ourProduct:Partial<Product>={id:1, name:'clothes', price:30000, brand:'musinsa', stock:30};   // 모든 속성을 지정해도 된다.

// Partial은 이것과 똑같은 효과를 지닌다.
// interface UpdateProduct{
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {
    
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email:string;
    profilePhotoUrl: string;
}
// interface UserProfileUpdate{ 인터페이스에서 옵셔널 기능만 추가한 상태 파셜과 비슷하다.
//     username?: string;
//     email?:string;
//     profilePhotoUrl?: string;
// }

// 첫번째 방법
type UserProfileUpdate1 = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhonoUrl?: UserProfile['profilePhotoUrl'];
}

// 두번째 방법
type UserProfileUpdate2 = {
    [p in 'username' | 'email' | 'profilePhothUrl']?: UserProfile[p]    // for .. in 반복문이라고 보면 된다.
}
type UserProfileKeys = keyof UserProfile;

// 세번째 방법(두번째 방법을 줄여놓은 것이다.)
type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// 네번째 방법(이건 모든 인터페이스 타입을 partial을 사용하여 검사해주는 것이다.)
type Subset<T> = {
    [p in keyof T]?: T[p]
}

