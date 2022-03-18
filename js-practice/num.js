const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var resultNum="";
var num;
rl.on("line",(line)=>{
    num = line;
    rl.close();
});
rl.on("close",()=>{
    for(var i = 1 ; i<= num; i++){
        if(i == num){
            
            resultNum = resultNum + i;
        }else{
            resultNum = resultNum + i +", ";
        }
    }
    console.log(resultNum);
});

// 숫자를 입력하면 1부터 해당 숫자까지 출력