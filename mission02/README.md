클릭 이벤트 활성화

```js
ul.addEventListener('click',clickImage);
```

타겟 클릭시 배경 색상 변경

```js
css("body", "background", `linear-gradient(to bottom,${data[index-1].color[0]},#000`);
```

타겟 클릭시 이미지 변경

```js
attr(visualImg,'src',`./assets/${data[index-1].src}`);
```

타겟 클릭시 텍스트 변경

```js
nickName.textContent = data[index-1].name
```

반복문 사용
```js
list.forEach(li => removeClass(li, 'is-active'))
```

함수 분리

```
Coming soon ...
```