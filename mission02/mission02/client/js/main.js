
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = getNode('.nav');

function handleSlider(e){

    e.preventDefault();
    const target = e.target.closest('li');

    if(!target){
        return;
    }

    const list = [... e.currentTarget.children];

    
    list.forEach( li => removeClass(li,'is-active'));

    addClass(target,'is-active')

    

    console.log(list);

}








nav.addEventListener('click',handleSlider);








