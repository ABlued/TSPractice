// 제네릭은 똑같은 속성이 담긴 인터페이스를 하나로 뭉칠 수 있게 해준다.

interface dropdownItem<T>{
  value:T;    //string과 number를 동시에 받아야하므로
  selected:boolean;
}

// interface Email{
//   value:string;
//   selected:boolean;
// }
const emails : dropdownItem<string>[] = [   //제네릭 타입인 T에 string이 들어간다
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }
const numberOfProducts : dropdownItem<number>[] = [   //제네릭 타입인 T에 number 들어간다
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item:dropdownItem<string> | d  opdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

/**
 *    // createDropdownItem 함수 내에 유니온 타입 제거하는 방법
 * interface Item<T> {
  value: T;
  selected: boolean;
}

 * function createDropdownItem<T>(item: Item<T>): HTMLOptionElement {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email: Item<string>) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (numProduct: Item<number>) {
  const item = createDropdownItem<number>(numProduct);
  const selectTag = document.querySelector("#product-dropdown");
  selectTag.appendChild(item);
});
 * 
 */