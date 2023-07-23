
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const ul = getNode('.ul');
const nickName = getNode('.nickName');
const visualImg = getNode('.visual img');



// ul 를 클릭하면 작동되는 함수 (= 일어나는 일)
function clickImage(e){

    e.preventDefault();
    // target : e라는 객체 목록에서 내가 정확히 클릭한 것을 가져온 것의 가장 가까운 부모요소인 li, 안에 is-active를 넣어주려고 찾아옴
    const target = e.target.closest('li');
    const button = e.target.closest('button');

    // 만약에 타겟이 없으면, 함수 실행을 중단한다.
    if(!target || !button) return;

    // list 는 이벤트가 걸려있는 곳 : ul 의 자식요소들이 배열로 존재하는 것
    const list = [... e.currentTarget.children];
    
    // list 를 forEach 로 조회할건데, 조회할 대상은 li이고, removeClass 를 할 것이다.
    list.forEach(li => removeClass(li, 'is-active'))

    addClass(target,'is-active')

    const index = attr(target, 'data-index');

    
    // 세 번째 인자에 들어가야할 것 : class 이름이 data-index 인 것의 자식요소인 이미지 / alt 텍스트
    attr(visualImg,'src',`./assets/${data[index-1].src}`);
    attr(nickName,'alt',data[index-1].alt);

    // textContent 사용하여 닉네임 값을 바꿔줌 닉네임 class 안에 있는 것을 data 에서 name 가져와서..
    nickName.textContent = data[index-1].name

    css("body", "background", `linear-gradient(to bottom,${data[index-1].color[0]},#000`);

    // ${data[index-1].color[0]} colorA변수
    // #000 colorB 변수 로 지정해주기 나중에..

}


// '클릭' 하면 handleSlider 라는 함수가 작동됨
ul.addEventListener('click',clickImage);





// 함수 분리 시도해보기




