const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    array = line.split(" ");
    a = array[0];
    b = array[1];
    c = array[2];
    d = array[3];
    
    console.log(array);
    rl.close();
});
rl.on('close', ()=> {
  if(( a <= b && a === d && b > c && c < 6 ) || ( a === b && a === c && a === d) ) {
    console.log(true);
  }else{
    console.log(false);
  }
});

 // 조건에 맞는 암호
 // 아래의 1, 2, 3, 4의 조건을 동시에 충족하는 경우 또는 
 // 5, 6, 7의 조건을 동시에 충족하는 경우 true를 아니라면 false를 출력
 // a는 b보다 작거나 같다.
 // a는 d와 같다.
 // b는 c보다 크다.
 // c는 6보다 작다.
 // a는 b와 같다.
 // a는 c와 같다.
 // a는 d와 같다.