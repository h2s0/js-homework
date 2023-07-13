// 일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}




// 1. email 정규표현식을 사용한 validation

// 아이디 값이 맞지 않으면 is--invalid 를 추가하는 것을 작성할 것이다.
// is--invalid 가 input 의 class 값으로 들어가면 css 243 조건이 맞게 되어 빨강색 글씨가 보이게 된다.

// html tag 를 js 로 가져오는 방법 1. getElementById 2. querySelector

function idValidation(){

  const idInput = document.querySelector("#userEmail");
  // id 값을 이용해서 html input 태그 전체를 가져온 것임
  
  if(!emailReg(idInput.value)) {
    // 이메일 유효성 검사와 idInput 에 적은 값이 틀린 것이 true 면, {} 실행
    idInput.classList.add('is--invalid')
    // 빨강 글씨가 보이는 코드. 값이 틀리면 실행되어야함.
  } else {
    idInput.classList.remove('is--invalid')
  }
    // 기본상태가 display : none 이니까 else 가 필요없다고 생각하였는데, 직접 사용해본 결과 잘못된 값 -> 옳은 값 을 입력했을 때 빨강 글씨를 없애기 위해서 필요하다는 것을 확인하고 추가하였다.
}




// 2. pw 정규표현식을 사용한 validation

  //   - false면 해당 input에 is--invalid 추가

  //  - true면 해당 input에 is--invalid 제거
  

function pwValidation(){

  const pwInput = document.querySelector("#userPassword");

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











