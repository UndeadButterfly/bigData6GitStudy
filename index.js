alert("안녕!!!");
//타이틀(h1)에 마우스를 올리면 색이 바뀌는 이벤트 정의 (h1 : 검색엔진에게 document 전체 제목의 의미를 가진다)
document.querySelector("h1").addEventListener("mouseover",(e)=>{
    e.target.style.color="red";
})