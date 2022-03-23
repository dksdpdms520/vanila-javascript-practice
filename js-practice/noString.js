const readline = require("readline");
var string;
var resultString = "";
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.on("line", (line) => {
     string = line;
     rl.close();
});
rl.on("close", ()=> {
    for(var i =0; i < string.length; i++){
        unicode = string.charCodeAt(i);
        
        if(48 <= unicode && unicode < 58){
            resultString = resultString + string[i];
        }
    }
    console.log(resultString)
});

// 문자열을 입력받고  문자 또는 기호를 제외한 숫자만 문자열로 출력