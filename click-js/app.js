const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     }
//     else {
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleTitleClick)

// classList 우리가 class들의 목록으로 작업할 수 있게 허용해줌
// className은 이전 class를 상관하지 않고 모두 교체
// contains은 명시한 class가 HTML element의 class에 포함되어 있는지


function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick)

// toggle은 토큰이 존재하면 토큰 제거
// 토큰 존재하지 않으면 토큰 추가

// 1. toggle은 h1의 classList에 clicked class가 이미있는지 확인
// 2. 만약 있다면 toggle이 clicked를 제거
// 3. 만약 className이 존재하지 않는다면 toggle은 className 추가
