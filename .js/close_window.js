/*var close_time; // 시간 정보
var close_time2 = 10; // 10초 설정
clearTimeout(close_time); // 재호출 정지
close_time = setTimeout("close_window()", 10000); // 1/1000 초 지정, 바로 시작
show_time(); // 실시간 시간 보여주기

function show_time() {
    let divClock = document.getElementById("Time");
    divClock.innerText = close_time2; // 10초 삽입 시작
    close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000); // 1초마다 갱신
}
function close_window() { // 함수 정의
    window.close(); // 윈도우 닫기
}*/
var close_time; // 시간 정보
var close_time2 = 10; // 10초로 설정합니다.
clearTimeout(close_time); // 재진입을 중단합니다.
close_time = setTimeout(close_window, 10000); // 1/1000초를 지정하여 즉시 시작합니다.
show_time(); // 실시간 시간 표시

function show_time() {
  let divClock = document.getElementById("Time");
  let clock = "남은 시간" + close_time2.toString() + "초 입니다"; // 시간을 문자열로 변환하고 추가 문자열과 함께 연결합니다.
  divClock.innerText = clock; // 시간을 화면에 표시합니다.
  close_time2--; // 1초씩 감소합니다.
  setTimeout(show_time, 1000); // 1초마다 업데이트합니다.
}

function close_window() {
  window.close(); // 창을 닫습니다.
}