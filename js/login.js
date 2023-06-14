/*function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    
    form.action = "../index_login.html";
    form.method = "get";
    
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
		session_set(); // 세션 생성
		form.submit();
    }
}*/
/*function get_id(){
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
          var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
          }
       } // 2중 for문 끝
}; // 함수 끝
alert(getParameters('id') + '님 방갑습니다!'); // 메시지 창 출력
}*/
function get_id() {
	setTimeout(logout, 1000 * 60 * 4);
	if (true) {
        decrypt_text();
    } else {
        var getParameters = function (paramName) { // 변수 = 함수(이름)
            var returnValue; // 리턴값을 위한 변수 선언
            var url = location.href; // 현재 접속 중인 주소 정보 저장
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                    return decodeURIComponent(returnValue);
                    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
                }
            } // 2중 for문 끝
        } // 함수 끝
        alert(getParameters("id") + '님 방갑습니다!'); // 메시지 창 출력
    }
}
function addJavascript(jsname) { // 자바스크립트 외부 연동
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수
function login() { // 로그인
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
    form.action = "../index_login.html";
    form.method = "get";
    if (check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.");
        setCookie("id", id.value, 1); // 1일 저장
        alert("쿠키 값 :" + id.value);
    } else { // 아이디 체크 x
        setCookie("id", id.value, 0); // 날짜를 0 - 쿠키 삭제
    }
    if (id.value.length === 0 || password.value.length === 0) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        login_failed_count();
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id.value)) {
        alert("올바른 이메일 형식이 아닙니다.");
        login_failed_count();
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value)) {
        alert("비밀번호는 최소 8자 이상이어야 하며, 최소 하나의 대문자, 소문자, 숫자를 포함해야 합니다.");
        login_failed_count();
    } else {
        login_count();
        session_set(); // 세션 생성
        form.submit();
	}
		
}

/*let keep_login;
clearTimeout("keep_login")
keep_login = setTimeout("logout()", 10000);*/
// 3분후 로그아웃
function login_count() {
    let count = getCookie("login_cnt");
    // count = 0;
    // count = parseInt(count);
    if (count) {
        count = parseInt(count);
        count += 1;
        setCookie("login_cnt", count, 1);
    } else {
        setCookie("login_cnt", 1, 1);
    }
}
function logout_count() {
    let count = getCookie("logout_cnt");
    // count = 0;
    // count = parseInt(count);
    if (count) { // 쿠키값이 있다면
        count = parseInt(count); // 숫자로 변환합니다.
        count += 1; // 로그아웃 횟수를 1 증가시킵니다.
        setCookie("logout_cnt", count, 1); // 업데이트된 횟수를 "logout_cnt" 쿠키에 설정합니다.
    } else {
        setCookie("logout_cnt", 1, 1); // 초기 로그아웃 횟수를 1로 설정하여 "logout_cnt" 쿠키를 생성합니다.
    }
}
function login_failed_count() {
    let count = getCookie("login_failed_cnt")
    if (count) {
        count = parseInt(count);
        count++;
        setCookie("login_failed_cnt", count, 1);
    } else {
        setCookie("login_failed_cnt", 1, 1);
    }
    if (count == 3) {
        alert("로그인 허용 횟수를 초과했습니다. 2분 동안 로그인할 수 없습니다.");
        // 로그인 제한 로직 추가
        restrictLogin();
    }
}

function get_id() {
	setTimeout(logout, 1000 * 60 * 4);
	if (true) {
        decrypt_text();
    } else {
        var getParameters = function (paramName) { // 변수 = 함수(이름)
            var returnValue; // 리턴값을 위한 변수 선언
            var url = location.href; // 현재 접속 중인 주소 정보 저장
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                    return decodeURIComponent(returnValue);
                    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
                }
            } // 2중 for문 끝
        } // 함수 끝
        alert(getParameters("id") + '님 방갑습니다!'); // 메시지 창 출력
    }
}

function restrictLogin() { // 로그인 폼 요소를 비활성화합니다.
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    id.disabled = true;
    password.disabled = true;
    form.removeEventListener('submit', login);
    // 로그인 시도를 막기 위해 이벤트 리스너를 제거합니다.
    // 제한 시간이 지난 후 로그인 폼을 다시 활성화합니다.
    setTimeout("restrict_login", 120000); // 로그인 실패 횟수를 초기화합니다.
}
function restrict_login() {
    id.disabled = true;
    password.disable = true;
    form.addEventListener('submit', login);
    setCookie("login_failed_cnt", 0, 1);
}

function logout() {
    session_del(); // 세션 삭제
    logout_count();
    location.href = '../index.html';
}
/*function setCookie(name, value, expiredays) {
        var date = new Date();
        date.setDate(date.getDate() + expiredays);
        document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";
}

function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
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
}*/
/*function session_set() { //세션 저장
    let id = document.querySelector("#floatingInput");
	    let password = document.querySelector("#floatingPassword");
    if (sessionStorage) {
        let en_text = encrypt_text(password.value);
        sessionStorage.setItem("Session_Storage_test", en_text);
	} else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_get() { //세션 읽기
    if (sessionStorage) {
       return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href='index_login.html'; // 로그인된 페이지로 이동
    }
}

function session_del() {//세션 삭제
    // Check if the sessionStorage object exists
    if (sessionStorage) {
        // Retrieve data
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}*/
/*function encodeByAES256(key, data){
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
};

function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b); 
}*/