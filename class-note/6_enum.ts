enum Shoes{
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes);       //0이 출력된다.
// enum은 별도로 지정하지 않으면 각각의 원소들은 number로 취급된다. Nike = 0, Adidas = 1

enum Shoes1{
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes1 = Shoes1.Nike;
console.log(myShoes1);      //'나이키'가 출력된다.

// 활용 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}


function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }

    if(answer === Answer.No){
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
askQuestion(Answer.No);
