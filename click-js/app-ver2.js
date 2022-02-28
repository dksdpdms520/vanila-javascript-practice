const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const clickedClass = "clicked"
    if (h1.className === clickedClass) {
        h1.className = "";
    }
    else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick)

// 1) HTML파일은 CSS문서와 JS문서를 임포트
// 2) CSS에 .active라는 class를 생성
// 3) addEventListener로 h1을 클릭하면 handleTitleClick 함수가 작동
// 4) handleTitleClick 함수는 h1의 class name을 "active" 로 바꿈
// 5) .active의 color는 토마토색이기 때문에 토마토 색이 됨
