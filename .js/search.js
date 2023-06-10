/*document.getElementById("search_btn").addEventListener("click", search_message);
function search_message(){
	alert("검색을 수행합니다!");
}*/
//document.getElementById("search_btn").addEventListener('click', search_message);

/*var search_array =[]; //빈 배열 - 전역 변수

function search_message(){
   let search_str = document.getElementById("search_txt"); // 변수에 저장
	if(search_str.value.length === 0){// 문자 길이, 엄격한 비교
		alert("검색어가 비었습니다. 입력해주세요");
	}
	else{
		alert("검색을 수행합니다!");
		search_array.push(search_str.value); //배열에 검색어 추가
		let text = document.getElementById("search_message").innerHTML = search_array.toString();// 값 변환
		document.querySelector("#form_main").submit();
		if(search_array.length >= 10){
			search_array.push();
			search_array.shift();
			//search_array.sort();
		}
	}
}*/               
const limitWords = ["씨발", "미친", "개새끼"]; // 검색 제한 단어 선언 및 초기화

document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
    let search_str = document.getElementById("search_txt").value; // 검색어 입력값 가져오기
    if(search_str.length === 0){ // 검색어가 비어있는 경우
        alert("검색어가 비었습니다. 입력해주세요");
    }
    else{
        let isLimitWord; // 검색어가 제한 단어인지 여부를 나타내는 변수
        for(let i = 0; i < limitWords.length; i++){
            if(search_str === limitWords[i]){ // 검색어가 제한 단어와 일치하는 경우
                isLimitWord = true; // 제한 단어임을 표시
                break; // 반복문 중단
            }
        }
        if(isLimitWord === true){ // 검색어가 제한 단어인 경우
            alert("검색이 제한된 단어입니다. 다른 검색어를 입력해주세요.");
        }
        else{
            alert("검색을 수행합니다!");
            document.querySelector("#form_main").submit(); // 폼 실행
        }
    }
}
/*document.getElementById("search_btn").addEventListener('click', search_message);
const limitWords = ["씨발","미친","개새끼"];

function search_message() {
let search_str = document.getElementById("search_txt").value; // Get search term input
  

  if (search_str.length === 0) { // If the search term is empty
    alert("The search term is empty. Please enter");
  } else {
    let isLimitWord = limitWords.includes(search_str); // Check if the search term is in the limitWords array

    if (isLimitWord) { // if the search term is a limit word
      alert("Your search is restricted. Please enter another search term.");
    } else {
      alert("Do a search!");
      document.querySelector("#form_main").submit(); // run the form
    }
  }
}*/
/*document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];
const filltering = ["시발","미친","개새끼"];

function search_message(){
	let search_str = document.getElementById("search_txt").value;
	if(filltering.includes(search_str)){
		alert("검색 제한");
	}
	else{
		alert("검색 수행");
		document.querySelector("#form_main").submit();
		search_array.push(search_str.value);		
	}
	let text = document.getElementById("search_message").innerHtml = search_array.toString();
	search_message.innerHTML = search_str.value;
}*/
