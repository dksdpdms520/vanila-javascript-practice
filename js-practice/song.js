const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var str;

rl.on("line", (line) => {
    str = line;
    rl.close();
});

rl.on("close",() => {
    for(i =0 ;i < str.length ; i++) {
        if(str[i] == " "){
            console.log("링디기디기");
        }else if(str[i] == "."){
            console.log("딩딩딩");
        }else{
            process.stdout.write("링딩동 ");
        }
    }
});

// 나는 베짱이. -> ‘링딩동 링딩동 링디기디기 딩딩딩’ 