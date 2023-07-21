// 일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

  const idInput = document.querySelector("#userEmail");
  const pwInput = document.querySelector("#userPassword");


function idValidation(){
  if(!emailReg(idInput.value)) {
    idInput.classList.add('is--invalid')
  } else {
    idInput.classList.remove('is--invalid')
  }
}




// 2. pw 정규표현식을 사용한 validation

  //   - false면 해당 input에 is--invalid 추가

  //  - true면 해당 input에 is--invalid 제거
  

function pwValidation(){
  if(!pwReg(pwInput.value)) {
    pwInput.classList.add('is--invalid')
  } else {
    pwInput.classList.remove('is--invalid')
  }
}



// 3. 상태 변수 관리



// 4. 로그인 버튼을 클릭시 조건처리



// html 에 로그인 버튼 클릭시 작동하는 function ( 클릭시 해야하는 할 일 목록 )

function login(){

    idValidation();
    pwValidation();

    // if(로그인 작성값 === user.id && 비밀번호 작성값 === user.pw) {
    //   welcome 페이지로 이동하는 로직 (검색하면 다나와)
    // }
  if ( idInput.value === user.id && pwInput.value === user.pw ) {
    window.location.href = 'welcome.html'
  }

}

// 함수만들때 한가지 역할만 하는게 좋다. 그래서 아이디 유효성 체크, 비밀번호 유효성 체크를 따로 만들어서 넣어줌





// 이메일 유효성 검사 코드
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

// 비밀번호 유효성 검사 코드
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











