const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var tasu, anta;
var tayul;
var cnt = 0;

rl.on("line", (line) =>{
   if(cnt === 0){
        tasu = parseInt(line);
        tasu += 16;
        cnt += 1;
   }else{
        anta = parseInt(line);
        anta += 6;
        tayul = anta/tasu * 1000;
        rl.close();
   }
});

rl.on("close", () => {
    var hal = Math.floor(tayul/100);
    var pun = Math.floor((tayul-(hal*100))/10);
    var ri = Math.floor(tayul%10);
    if(hal > 0){
    console.log(hal+"할");
    }
    if(pun > 0){
        console.log(pun+"푼");
    }
    if(ri > 0){ 
        console.log(ri+"리");
    }
});

// 타수 안타