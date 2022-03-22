const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function umbrella(i) {
  if (i >= 50) {
    console.log("우산을 챙긴다.")
  } else { console.log("그냥 간다.")}
  rl.close();
}).on("close", function() {
  process.exit();
});


// 비가 올 확률을 입력받습니다.
//비가 올 확률이 50% 이상이면 우산을 챙긴다., 그렇지 않으면 그냥 간다.를 출력