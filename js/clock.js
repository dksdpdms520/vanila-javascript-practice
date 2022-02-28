const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(sayHello, 5000): 매초, 매분마다 반복되는 일을 해야할 때 실행하는 함수 / 첫 번째 인수에는 함수이름을, 두 번째 인수는 시간을 적어야함 / 1초는 1000ms임
// setTimeout(sayHello,1000): 함수를 바로 실행하고 싶지않을 때 사용하는 함수 (ex. setTimeout은 1초 뒤에 sayHello를 실행시킨다는 의미)

// padStart(length,string): 앞의 요소의 길이가 length가 되도록 맞추고 부족하다면 string을 앞에 덧붙임
// padStart(2,"0") 2는 두글자가 되지않으면 0을 앞에 추가한다 라는 의미 (뒤에 추가하고싶으면 padEnd를 사용)