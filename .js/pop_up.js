function pop_up() {
	window.open("../pop_up/pop_up.html","팝업테스트","width=400,height=300,top=10,left=10");
}

function showclock(){
	let currentDate = new Date(); //날짜 객체 생성
	let time = document.getElementById('divClock');
	let msg = "현재 시간 :";
	if(currentDate.getHours()>12){//12시 보다 크면 오후 아니면 오전
		msg += "오후";
		msg += currentDate.getHours()+"시";
	}
	
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innerText = msg;
	
	if(currentDate.getMinutes()>58){//정각 1분전 빨강색 출력
		time.style.color="red";
	}
	setTimeout(showclock, 1000); //1초 마다 갱신, ppt_오류
}