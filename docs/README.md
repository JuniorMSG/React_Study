## Vanilla JS
순수 자바스크립트를 의미함
특정 라이브러리나 프레임워크를 사용하지 않은 그 자체의 자바스크립트

## JSX
문자도 HTML도 아닌 JavaScript의 확장 문법
~~~jsx
const element = <h1>Hello, world!</h1>;
~~~

## [Babeljs.io](https://babeljs.io/)
JavaScript Complier
컴파일러: 언어 해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램


## 스프레드 연산자
```jsx
const customH1 = <h1 {...props}>{props.text}</h1>; // 스프레드 연산자
// const customH1 = <h1 className={props.className} children={props.children}>{props.text}</h1>;
ReactDOM.render(customH1, rootElement);
```

## re-render
바닐라 JS => 변경으로 인해 Element를 다시 그림  
React => Virtual DOM을 통해 변경된 부분만 업데이트 (reflow, repaint 최소화)

### [리액트의 렌더링](https://ko.reactjs.org/docs/rendering-elements.html)  
React 앨리먼트는 불변객체(immutable)입니다.  
불변객체? 변하지 않는 객체  
우리는 그저 ReactDOM.render(element, rootElement); 로 전달할뿐...  
변경 판단 및 반영은 리액트가 알아서 한다.  


### 재조정 (Reconciliation)[(https://ko.reactjs.org/docs/reconciliation.html)]
* 앨리먼트 타입이 바뀌면?
  * 이전 앨리먼트는 버리고 새로 그린다.
* 앨리먼트 타입이 같다면? 
  1. key를 먼저 비교한다
  2. props를 비교해서 변경사항을 반영한다.

## Event
### [Vanilla JS](https://www.w3schools.com/js/js_events.asp)  
* addEventListener  
* on{event} onclick onmouseout onfocus onblur….  

### [React]
* on{event} (CamelCase)


