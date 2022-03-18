const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0;

for(var i =0 ; i < fruits.length ; i++){
    if (0 === fruits[i].indexOf("b")){
        sum += 1;
    }
}

document.write("b로 시작하는 과일은 " + sum + "개");

// b로 시작하는 과일 개수 출력