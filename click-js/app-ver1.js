const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const currentColor = h1.style.color 

    // currentColor: 최근 색상 값 복사하는 역할
    // newColor: 변수에 대입된 색상 값을 h1.style.color에 최종적으로 할당

    let newColor;
    if (currentColor === "blue"){
        newColor = "tomato";
    }
    
    // =: 해당 값 대입
    // ===: 해당 값이 맞는지 확인

    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick)

// 1) click event 발생 및 함수 실행
// 2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
// 3) newColor 변수 선언
// 4) currentColor 현재 값 확인
// 5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
// 6) 마지막으로 h1.style.color에 newColor값 대입 (setter)
