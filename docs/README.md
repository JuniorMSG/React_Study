<!-- TOC -->
  * [Vanilla JS](#vanilla-js)
  * [JSX](#jsx)
  * [Babeljs.io](#babeljsio)
  * [스프레드 연산자](#스프레드-연산자)
  * [re-render](#re-render)
    * [리액트의 렌더링](#리액트의-렌더링)
    * [재조정 (Reconciliation)(https://ko.reactjs.org/docs/reconciliation.html)](#재조정-reconciliationhttpskoreactjsorgdocsreconciliationhtml)
  * [Event](#event)
    * [Vanilla JS](#vanilla-js-1)
    * [[React]](#react)
  * [Component ? Element ? DOM ?](#component--element--dom-)
  * [useState](#usestate)
    * [prev](#prev)
    * [lazy initialization](#lazy-initialization)
  * [Custom Hook](#custom-hook)
  * [Hook Flow - useEffect](#hook-flow---useeffect)
    * [동작 방식](#동작-방식)
    * [의존성 배열의 역할](#의존성-배열의-역할)
    * [의존성 배열을 생략한 경우](#의존성-배열을-생략한-경우)
    * [의존성 배열에 특정 상태나 prop을 포함한 경우](#의존성-배열에-특정-상태나-prop을-포함한-경우)
    * [주의사항](#주의사항)
    * [useEffect 클린업 함수](#useeffect-클린업-함수)
<!-- TOC -->

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

### 재조정 (Reconciliation)(https://ko.reactjs.org/docs/reconciliation.html)

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

## Component ? Element ? DOM ?

DOM : 논리 트리 / 웹 페이지의 구조화된 표현
컴포넌트 : 엘리먼트의 집합 / 재사용 가능한 UI 조각
엘리먼트 : DOM의 노드 /

## useState
상태값을 관리해주는 훅
useXXX 라고 불리는걸 리액트에서 훅이라고 부름

### prev
React의 useState 훅에서 상태 업데이트 함수를 사용할 때, 이전 상태값(prev)에 접근할 수 있는 기능이 제공됩니다.   
이는 상태 업데이트가 현재 상태에 의존하는 경우, 즉, 새로운 상태가 이전 상태를 기반으로 계산되어야 하는 경우에 매우 유용합니다.  

상태 업데이트 함수는 (prevState) => newState 형태의 함수를 인자로 받을 수 있으며, 여기서 prevState는 상태의 이전 값을 나타냅니다.   
이 패턴을 사용하면 상태 업데이트가 비동기적으로 일어나도, 항상 최신의 상태 값을 기반으로 업데이트가 이루어지도록 할 수 있습니다.  

```js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        // 이전 상태 값을 사용하여 상태를 업데이트
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
```


### lazy initialization
지연 초기화는 다음과 같은 경우에 특히 유용합니다:
1. 초기 상태 값이 복잡한 계산을 통해 얻어지는 경우
2. 초기 상태가 큰 데이터 구조를 포함하는 경우
3. 초기 상태 설정에 비용이 많이 드는 작업(예: 로컬 스토리지에서 데이터 불러오기)이 필요한 경우
4. 지연 초기화를 사용함으로써, 초기 렌더링의 성능을 향상시킬 수 있으며, 불필요한 계산을 줄일 수 있습니다.
```js

// 코드에서 complexCalculation은 컴포넌트가 렌더링될 때마다 호출됩니다. 
// 그러나 실제로 상태가 필요할 때만 계산을 실행하고 싶다면, 이 방식은 비효율적일 수 있습니다.
const [state, setState] = useState(complexCalculation());

// lazy initialization
// 이 방식을 사용하면, complexCalculation 함수는 컴포넌트가 처음 렌더링될 때 한 번만 호출됩니다. 
// 이후의 렌더링에서는 이 함수가 호출되지 않으므로, 초기 상태의 계산 비용이 큰 경우 성능을 개선할 수 있습니다.
const [state, setState] = useState(() => complexCalculation());
```



## Custom Hook
찍어내기 / 반복 => 함수화
useState, useEffect 등을 반복하는걸 모아서 함수화 시켜서 커스텀 훅을 제작 가능하다
React에서는 use로 시작하는 함수를 훅이라고 부른다.

useCamelCase는 커스텀 훅은 지칭하게 된다. 

![04_01_customhook](https://github.com/JuniorMSG/React_Study/assets/22822369/aff302e2-1f2e-48b4-97c2-0661d70ec315)

## Hook Flow - useEffect
useEffect 훅의 의존성 배열(Dependency Array)은 React 컴포넌트가 렌더링될 때 Side Effects을 언제 실행할지 결정하는 데 사용됩니다.  
useEffect는 주로 데이터 fetching, DOM 업데이트, 구독 설정 등의 작업을 수행하기 위해 사용되며, 의존성 배열을 통해 이러한 작업의 실행 조건을 정밀하게 제어할 수 있습니다.

### 동작 방식
![img](https://github.com/JuniorMSG/React_Study/assets/22822369/9f194b98-2b61-4a3a-8a2b-467a8707f0ad)

useEffect => render 가 끝난 뒤  
update시 => useEffect clean up / useEffect
dependency가 있을 경우 => dependency가 변경될 때만 실행

클린업은 부모의 클린업이 먼저 실행된다.
useeffect-클린업은 useeffect 이전에 실행된다.

* 객체가 있는 대상 (즉 Update)
    * 클린업이 먼저 실행되고 useEffect clean up => useEffect
* 객체가 없는 대상
    * 클린업 대상이 없으므로 useEffect만 실행된다.

1. 앱이 랜더된다.
2. Child가 랜더된다.
3. App의 useEffect 클린업이 실행된다. (부모의 클린업이 먼저 실행된다.)
4. Child의 UseEffect가 실행된다. (클린업 될 대상이 없음 있으면 먼저 실행됨)
5. App의 UseEffect가 실행된다.


![img_1](https://github.com/JuniorMSG/React_Study/assets/22822369/c26127a4-097c-4129-810c-690d4f07d2da)
위의 이미지에서는 Child가 이미 그려진 상태이다.
1. Child가 랜더된다.
2. Child의 UseEffect가 클린업이 실행 된다.
3. Child의 UseEffect가 실행된다.


### 의존성 배열의 역할
의존성 배열이 비어있는 경우 ([]): useEffect 내의 부작용은 컴포넌트가 마운트될 때 단 한 번만 실행됩니다.  
컴포넌트의 언마운트 시점에 클린업 함수가 있을 경우 그 클린업 함수만 실행됩니다. 이는 데이터 fetching이나 이벤트 리스너 설정 같은 경우에 유용하게 사용됩니다.  

### 의존성 배열을 생략한 경우
useEffect 내의 부작용은 컴포넌트가 렌더링될 때마다 실행됩니다. 이는 매 렌더링 후에 특정 작업을 수행해야 할 때 사용됩니다.

### 의존성 배열에 특정 상태나 prop을 포함한 경우
지정된 의존성들 중 하나라도 변경될 때 useEffect 내의 부작용이 실행됩니다. 이는 의존성의 변경을 감지하여 관련 작업을 실행하고자 할 때 사용됩니다.

```js
useEffect(() => {
  // API 호출
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    setData(data);
  };

  fetchData();
}, []); // 의존성 배열이 비어있으므로, 컴포넌트 마운트 시 한 번만 fetchData 함수가 실행됨

useEffect(() => {
  console.log('Component updated:', props.count);
}, [props.count]); // props.count가 변경될 때마다 실행됨

```

### 주의사항
의존성 배열 내에 명시된 모든 값은 React에 의해 추적됩니다. 배열 내의 값이 변경되면, useEffect는 다시 실행됩니다.  
의존성 배열에 명시되지 않은 상태나 prop을 useEffect 내에서 사용할 경우, 예상치 못한 동작이 발생할 수 있으며, 이는 버그의 원인이 될 수 있습니다.   
이를 방지하기 위해 ESLint 규칙인 react-hooks/exhaustive-deps를 사용하는 것이 좋습니다. 이 규칙은 필요한 모든 의존성이 배열에 포함되도록 경고해 줍니다.  
useEffect의 의존성 배열은 컴포넌트의 성능 최적화와 부작용 관리에 매우 중요한 역할을 합니다.   
올바르게 사용될 때, 애플리케이션의 효율성을 높이고 버그를 예방하는 데 크게 기여할 수 있습니다.


### useEffect 클린업 함수
useEffect의 클린업 함수가 useEffect보다 먼저 실행되는 것처럼 보이는 것은 컴포넌트 라이프사이클과 useEffect 훅의 동작 방식에 기인합니다.   
React에서 useEffect는 컴포넌트가 렌더링된 후에 실행되며, 선택적으로 클린업(clean-up) 함수를 반환할 수 있습니다.  
이 클린업 함수는 주로 이벤트 리스너를 제거하거나, 구독을 해제하는 등의 정리 작업을 수행하기 위해 사용됩니다.

클린업 함수가 useEffect보다 먼저 실행된다고 느껴질 수 있는 상황은 주로 다음 두 가지 경우에 해당합니다:

1. 컴포넌트 언마운트 시: 컴포넌트가 DOM에서 제거될 때, useEffect에 의해 반환된 클린업 함수가 실행됩니다.   
   이 경우, useEffect의 메인 로직은 다시 실행되지 않습니다. 따라서, 컴포넌트의 생명주기가 끝날 때 클린업 함수가 마지막으로 실행되는 것처럼 보입니다.

2. 의존성 배열의 값이 변경될 때: useEffect는 선택적으로 두 번째 인자로 의존성 배열을 받습니다.
   의존성 배열에 명시된 값이 변경되면, 이전 렌더링에서 설정된 클린업 함수가 실행된 후, useEffect의 메인로직이 다시 실행됩니다.   
   이 과정에서 클린업 함수가 먼저 실행되고, 이후 useEffect의 메인 로직이 실행되는 순서로 동작합니다.

이러한 동작은 React의 라이프사이클과 효율적인 자원 관리를 위해 설계된 것입니다.   
useEffect의 클린업 함수는 컴포넌트가 언마운트되거나, 의존성 배열에 명시된 값이 변경될 때 이전에 설정된 부작용(sideeffects)을 정리(cleanup)하기 위해 실행됩니다.
이는 메모리 누수를 방지하고, 애플리케이션의 성능을 최적화하는 데 도움을 줍니다.


