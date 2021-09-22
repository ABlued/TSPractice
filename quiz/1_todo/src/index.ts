// node_modules 는 터미널에서 npm i 를 입력해야 생성되는 것이다.
// type Todo= {
//   id:number;
//   title:string;
//   done:boolean;
// };

//인터페이스    // 겹치는 부분이 많을 때는 인터페이스로 정의해주자
interface Todo {
  id:number;
  title:string;
  done:boolean;
}

let todoItems:Todo[];
// let todoItems: object[];   //이렇게 하지말고 위처럼 객체의 속성 모두 타입을 지정해야 좋다.
// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {    //이렇게 객체 안에 속성타입도 지정해야한다.
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  // todo.done = true;    //이렇게 하면 object 안에 done이라는 속성이 보장되지 않기에 오류가 난다
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted():object {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id:4,
    title: '아이템 4',
    done: false,
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log():void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
