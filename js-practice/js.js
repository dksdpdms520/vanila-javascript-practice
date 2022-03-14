// 값 입력 받기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(x) {
  console.log(x);
  rl.close();
}).on("close", function() {
  process.exit();
});

// 한 번에 여러 입력받기
// 100 200 300 ->
// 100
// 200
// 300

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});
 
rl.on('close', () => {
    input.forEach(el => {
        console.log(el);
    })
    process.exit();
})

// 한 번에 여러 입력받기 2

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});
 
rl.on('close', () => {
	const result = input.reduce(function add(sum, currValue) {
  	return sum + currValue;
    }, 0);
    const average = parseInt(result / input.length);
	console.log(average)
    process.exit();
})

// 한 번에 여러 입력받기 3

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0;
var input = [];
var start = '';

rl.on("line", function(x) {
  count += 1;
  input.push(x);
  var n = parseInt(input[0]);
  
  if(count === n + 1) {
    rl.close(); 
  }
}).on('close', function() {
  for(var i = 1; i < input.length; i++) {
    start += input[i];
  }
  console.log(start);
  process.exit();
});

// [ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]

var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

var a = words.splice(0,4)
var b = words.splice(2,1)
var c = words.splice(5,2)

var d = a.concat(b);
var e = d.concat(c);
console.log(e)

var lyrics = e.join(' ')
console.log(lyrics)

var len = lyrics.match(/p/g)
console.log(len.length)



