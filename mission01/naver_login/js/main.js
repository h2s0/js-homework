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

function pwValidation(){
  if(!pwReg(pwInput.value)) {
    pwInput.classList.add('is--invalid')
  } else {
    pwInput.classList.remove('is--invalid')
  }
}

function login(){

    idValidation();
    pwValidation();

  if ( idInput.value === user.id && pwInput.value === user.pw ) {
    window.location.href = 'welcome.html'
  }
}


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











