let user = { name:'cpat', age: 100 };

let admin = {name:'capt', age:100, role:'admin'};   // 위의 user와 중복되는 속성이 많다

// 이럴 때 prototype의 상속을 이용하는 것이 좋다.
admin = {};
// 상속을 받게 되면 admin은 user의 속성을 사용할 수 있게 된다.
admin.__proto__ = user;
console.log(admin.name);
console.log(admin.__proto__);