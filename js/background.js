const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",, "10.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// createElement(): JS에서 html 요소를 생성 (ex. document.createElement("img"): html 내에 img 태그를 생성)

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);

// appendChild(): 함수 안의 경로에 정의한 값을 가장 뒤에서 기입
// prependChild(): 함수 안의 경로에 정의한 값을 가장 앞에서 기입