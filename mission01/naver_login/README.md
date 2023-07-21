# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.




---


### 

### 구동방법
작성된 아이디 값이 맞지 않으면 is--invalid 를 추가한다.
is--invalid 가 input 의 class 값으로 들어가면 style.css의 243줄의 조건`.is--invalid + .error-message {
  display: block;
}`이 맞게 되어  빨강색 글씨가 보이게 된다.
<br/>
<br/>

### 코드설명
<br/>

##### 변수
```js
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}
```
설정해 준 아이디와 비밀번호. 이 값과 입력값이 같은지 비교할 것이다.
```js
const idInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
```
처음에는 함수 안에 변수를 작성해주었는데, 정의된 블럭 안에서만 사용할 수 있는 함수의 특성 때문에 마지막 함수에서 사용하지 못하게 되어 맨 위로 옮겨 작성해주었다.

html tag 를 js 로 가져오는 방법은 1. getElementById 2. querySelector
id 값을 이용해서(#) html input 태그 전체를 가져온 값을 idInput, pwInput 으로 설정해주었다.

<br/>
<br/>

##### 함수

- id 정규표현식을 사용한 validation
```js
function idValidation(){
    if(!emailReg(idInput.value)) {
      idInput.classList.add('is--invalid')
    } else {
      idInput.classList.remove('is--invalid')
    }
  }
    
```

if문 해석 : 이메일 유효성 검사와 idInput 에 적은 값이 틀린 것이 true 면,
{ 빨강 글씨가 보이게 만드는 코드 } 를 실행한다.
<br/>
false면 해당 input에 is--invalid 추가
true면 해당 input에 is--invalid 제거해주어야 한다.

is--invalid 는 값이 틀리면 실행되어야하기 때문에 부정연산자 !를 넣어 코드를 작성해주었다.
<br/>
기본상태가 display : none 이니까 else 가 필요없다고 생각하였는데, 직접 사용해본 결과 잘못된 값을 입력한 뒤 옳은 값 을 입력했을 때 빨강 글씨를 없애기 위해서 필요하다는 것을 확인하고 추가하였다.
<br/>
<br/>

- pw 정규표현식을 사용한 validation


```js
function pwValidation(){
  if(!pwReg(pwInput.value)) {
    pwInput.classList.add('is--invalid')
  } else {
    pwInput.classList.remove('is--invalid')
  }
}
```
아이디와 똑같은 방식으로 작성해주었다.
<br/>
<br/>

- 로그인 버튼 클릭시 작동하는 function ( 클릭시 해야하는 할 일 목록 )
```js


function login(){

    idValidation();
    pwValidation();

  if ( idInput.value === user.id && pwInput.value === user.pw ) {
    window.location.href = 'welcome.html'
  }
}
```
코드해석 :

로그인 작성값 idInput.value 와 user.id 가 정확히 맞고 ===,
비밀번호 작성값 pwInput.value 와 user.pw 가 같다면 ===
&& : 둘 다 true 일 때만 실행, 하나라도 false일 시 실행하지 않음
{ welcome.html 페이지로 이동 }
<br/>
한 가지 함수는 한 가지의 역할만 하는게 좋다.
그래서 아이디 유효성 체크, 비밀번호 유효성 체크를 따로 만들어서 login이라는 함수에 넣어주었다.