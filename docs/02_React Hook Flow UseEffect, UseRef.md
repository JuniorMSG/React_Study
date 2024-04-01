<!-- TOC -->

* [Hook Flow - useEffect](#hook-flow---useeffect)
    * [동작 방식](#동작-방식)
    * [의존성 배열의 역할](#의존성-배열의-역할)
    * [의존성 배열을 생략한 경우](#의존성-배열을-생략한-경우)
    * [의존성 배열에 특정 상태나 prop을 포함한 경우](#의존성-배열에-특정-상태나-prop을-포함한-경우)
    * [주의사항](#주의사항)
    * [useEffect 클린업 함수](#useeffect-클린업-함수)
* [React.useRef 사용법](#reactuseref-사용법)
    * [DOM 요소에 접근하기](#dom-요소에-접근하기)
    * [컴포넌트 사이에서 데이터 저장하기](#컴포넌트-사이에서-데이터-저장하기)
    * [타이머 함수를 위한 참조로 사용하기](#타이머-함수를-위한-참조로-사용하기)

<!-- TOC -->

[Tistory - 개발 블로그 마크다운으로 간편하게 써보기](https://steadiness-dev-invest.tistory.com/194)

## Hook Flow - useEffect

useEffect 훅의 의존성 배열(Dependency Array)은 React 컴포넌트가 렌더링될 때   
Side Effects을 언제 실행할지 결정하는 데 사용됩니다.

useEffect는 주로 데이터 fetching, DOM 업데이트, 구독 설정 등의 작업을 수행하기 위해 사용되며,   
의존성 배열을 통해 이러한 작업의 실행 조건을 정밀하게 제어할 수 있습니다.

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

의존성 배열이 비어있는 경우 ([]): useEffect 내의 sideeffects 컴포넌트가 마운트될 때 단 한 번만 실행됩니다.  
컴포넌트의 언마운트 시점에 클린업 함수가 있을 경우 그 클린업 함수만 실행됩니다.   
이는 데이터 fetching이나 이벤트 리스너 설정 같은 경우에 유용하게 사용됩니다.

### 의존성 배열을 생략한 경우

useEffect 내의 sideeffects는 컴포넌트가 렌더링될 때마다 실행됩니다.  
이는 매 렌더링 후에 특정 작업을 수행해야 할 때 사용됩니다.

### 의존성 배열에 특정 상태나 prop을 포함한 경우

지정된 의존성들 중 하나라도 변경될 때 useEffect 내의 부작용이 실행됩니다.  
이는 의존성의 변경을 감지하여 관련 작업을 실행하고자 할 때 사용됩니다.

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

* 의존성 배열 내에 명시된 모든 값은 React에 의해 추적됩니다.
    * 배열 내의 값이 변경되면, useEffect는 다시 실행됩니다.
* 의존성 배열에 명시되지 않은 상태나 prop을 useEffect 내에서 사용하면 예상치 못한 동작이 발생할 수 있습니다.

#### ESLint 규칙 react-hooks/exhaustive-deps

* useEffect의 의존성 배열은 컴포넌트의 성능 최적화와 side effects을 관리에 매우 중요한 역할을 합니다.
* 올바르게 사용될 때, 애플리케이션의 효율성을 높이고 버그를 예방하는 데 크게 기여할 수 있습니다.

### useEffect 클린업 함수

useEffect의 클린업 함수가 useEffect보다 먼저 실행되는 것처럼 보이는 것은  
컴포넌트 라이프사이클과 useEffect 훅의 동작 방식에 기인합니다.   
React에서 useEffect는 컴포넌트가 렌더링된 후에 실행되며, 선택적으로 클린업(clean-up) 함수를 반환할 수 있습니다.  
이 클린업 함수는 주로 이벤트 리스너를 제거하거나, 구독을 해제하는 등의 정리 작업을 수행하기 위해 사용됩니다.

클린업 함수가 useEffect보다 먼저 실행된다고 느껴질 수 있는 상황은 주로 다음 두 가지 경우에 해당합니다:

1. 컴포넌트 언마운트 시: 컴포넌트가 DOM에서 제거될 때, useEffect에 의해 반환된 클린업 함수가 실행됩니다.   
   이 경우, useEffect의 메인 로직은 다시 실행되지 않습니다.
   따라서, 컴포넌트의 생명주기가 끝날 때 클린업 함수가 마지막으로 실행되는 것처럼 보입니다.

2. 의존성 배열의 값이 변경될 때: useEffect는 선택적으로 두 번째 인자로 의존성 배열을 받습니다.
   의존성 배열에 명시된 값이 변경되면, 이전 렌더링에서 설정된 클린업 함수가 실행된 후, useEffect의 메인로직이 다시 실행됩니다.   
   이 과정에서 클린업 함수가 먼저 실행되고, 이후 useEffect의 메인 로직이 실행되는 순서로 동작합니다.

이러한 동작은 React의 라이프사이클과 효율적인 자원 관리를 위해 설계된 것입니다.   
useEffect의 클린업 함수는 컴포넌트가 언마운트되거나,
의존성 배열에 명시된 값이 변경될 때 이전에 설정된 side effects을 정리(cleanup)하기 위해 실행됩니다.
이는 메모리 누수를 방지하고, 애플리케이션의 성능을 최적화하는 데 도움을 줍니다.

## React.useRef 사용법

`React.useRef`는 React의 함수형 컴포넌트에서 참조(ref)를 사용할 수 있게 해주는 훅입니다.

### DOM 요소에 접근하기

함수형 컴포넌트 내에서 DOM 요소에 직접 접근해야 할 때 `useRef`를 사용할 수 있습니다.   
이를 통해 요소에 포커스를 주거나, 요소의 크기나 위치를 직접 조작하는 등의 작업을 수행할 수 있습니다.

예시:

```jsx
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 속성이 실제 DOM 요소를 가리킵니다.
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
```

### 컴포넌트 사이에서 데이터 저장하기

useRef는 컴포넌트의 렌더링 사이에 데이터를 저장하고 유지할 수 있게 해줍니다.   
상태(state)와 달리, 참조를 업데이트해도 컴포넌트가 리렌더링되지 않습니다.   
이 특성은 성능 최적화나 이전/현재 상태를 비교할 때 유용하게 사용될 수 있습니다.

### 타이머 함수를 위한 참조로 사용하기

setTimeout이나 setInterval 같은 타이머 함수의 ID를 저장하는 데 useRef를 사용할 수 있습니다.
이를 통해 컴포넌트가 언마운트될 때 타이머를 취소할 수 있어, 메모리 누수를 방지할 수 있습니다.

~~~jsx
function TimerComponent() {
    const intervalRef = useRef();

    useEffect(() => {
        const id = setInterval(() => {
            // 타이머 로직
        }, 1000);
        intervalRef.current = id;
        return () => clearInterval(intervalRef.current);
    }, []);

    return <div>Timer</div>;
}
~~~

