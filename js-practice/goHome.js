const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function goHome (i) {
  if (i >= 1000) {
    console.log("택시")
  }  else if (i >= 500) {
    console.log("버스")
  }  else if (i >= 300) {
    console.log("지하철")
  } else { console.log("도보") }
  rl.close();
}).on("close", function() {
  process.exit();
});

// 가진 돈에 따라 교통수단 출력