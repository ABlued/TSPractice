interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품목록을 받아오기 위한 API 함수
function fetchProducts():Promise<Product[]> {
    
    return
}
// 이런 식으로 Product의 몇몇 속성만 따로 뽑아서 다시 인터페이스를 만드는 것은 효율적이지 않다. 코드중복이 많이 있기 때문이다.
interface ProductDetail{
    id: number;
    name: string;
    price: number;
}

// 상품 하나의 상세정보를 받아오기 위한 API 함수 
// 그래서 Pick이란 타입을 쓰기도 한다.
// 사용법 : Pick<T K extend keyof T> T:타입, K:타입 T에 들어있는 속성 K들 
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem:ShoppingItem) {
    
}