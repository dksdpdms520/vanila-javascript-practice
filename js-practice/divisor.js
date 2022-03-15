var N;
var resultStr= "";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) =>{
    N = line;
    rl.close();
});

rl.on("close", () => {
  for(i = 1; i <= N; i++){
    if(N % i === 0){
        resultStr = resultStr + i + " ";
    }
  }
  console.log(resultStr);
});

// 약수 출력하기