# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.




---


### 

작성된 아이디 값이 맞지 않으면 is--invalid 를 추가한다.
is--invalid 가 input 의 class 값으로 들어가면 style.css의 243줄의 조건`.is--invalid + .error-message {
  display: block;
}`이 맞게 되어  빨강색 글씨가 보이게 된다.


### 코드설명


```js
const idInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
```
처음에는 함수 안에 변수를 작성해주었는데, 정의된 블럭 안에서만 사용할 수 있는 함수의 특성 때문에 마지막 함수에서 사용하지 못하게 되어 맨 위로 옮겨 작성해주었다.

id 값을 이용해서 html input 태그 전체를 가져온 값을 idInput, pwInput 으로 설정해주었다.

```js
function idValidation()
  if(!emailReg(idInput.value)) {
    // 이메일 유효성 검사와 idInput 에 적은 값이 틀린 것이 true 면, {} 실행
    idInput.classList.add('is--invalid')
    // 빨강 글씨가 보이는 코드. 값이 틀리면 실행되어야함.
  } else {
    idInput.classList.remove('is--invalid')
  }
    // 기본상태가 display : none 이니까 else 가 필요없다고 생각하였는데, 직접 사용해본 결과 잘못된 값 -> 옳은 값 을 입력했을 때 빨강 글씨를 없애기 위해서 필요하다는 것을 확인하고 추가하였다.
```