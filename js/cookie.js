function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
}

function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {//쿠키가 비어있지 않다면
            var cookie_array = cookie.split("; "); //쿠키 문자열을 ';' 기준으로 분리하여 배열로 만듭니다.
            for ( var index in cookie_array) {// 각 쿠키를 순회합니다.
                var cookie_name = cookie_array[index].split("=");//쿠키 이름과 값으로 분리합니다.
                
                if (cookie_name[0] == name) {//찾고자 하는 쿠키의 이름과 일치하는 경우
                    return cookie_name[1]; // 해당 쿠키의 값을 반환합니다.
                }
            }
        }
        return ;
}

function closePopup() {
        if (document.getElementById('check_popup').value) {
            setCookie("id", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close();
        }
}
function deleteCookie(cookieName){
var expireDate = new Date();
expireDate.setDate(expireDate.getDate() - 1);
document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
	let id = document.querySelector("#floatingInput");
	let check = document.querySelector("#idSaveCheck");
	let get_id = getCookie("id");
    
	if(get_id) { 
	id.value = get_id; 
	check.checked = true;
    }
	session_check(); // 세션 유무 검사
}