# React 컴포넌트 생명주기
# Blog(https://steadiness-dev-invest.tistory.com/196)

React 컴포넌트의 생명주기는 컴포넌트가 생성될 때부터 페이지에서 제거될 때까지의 과정을 말합니다. 이 과정에서 여러 생명주기 메서드가 호출되며, 개발자는 이 메서드들을 오버라이딩하여 특정 시점에 원하는 코드를 실행시킬 수 있습니다. 
각 단계에서 호출되는 주요 메서드들을 아래 표에서 확인할 수 있습니다.

| 생명주기 단계   | 메서드                                         | 설명                                                                                                  |
|------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **마운팅**     | `constructor()`                            | 컴포넌트를 새로 생성할 때마다 호출됩니다. 초기 상태 설정 및 메서드 바인딩에 사용됩니다.                     |
|            | `static getDerivedStateFromProps()`        | 컴포넌트가 생성될 때와 업데이트될 때 props로부터 상태를 동기화하는 데 사용됩니다.                       |
|            | `render()`                                 | 컴포넌트 UI를 렌더링하는 메서드입니다.                                                              |
|            | `componentDidMount()`                      | 컴포넌트가 마운트된 후 (DOM 트리에 삽입된 후) 호출됩니다. 외부 데이터 요청, DOM 노드 초기화 등에 사용됩니다. |
| **업데이트**   | `static getDerivedStateFromProps()`        | 컴포넌트 업데이트 시 props로부터 상태를 동기화할 때 호출됩니다.                                          |
|            | `shouldComponentUpdate()`                  | 컴포넌트가 리렌더링 할지 말지 결정합니다. 반환값이 `false`이면 업데이트 과정이 중단됩니다.                    |
|            | `render()`                                 | 컴포넌트 업데이트 시 UI를 렌더링합니다.                                                             |
|            | `getSnapshotBeforeUpdate()`                | 가장 최근의 렌더링 결과가 DOM에 반영되기 직전에 호출됩니다. 변경 전의 DOM 상태를 캡처하는 데 사용됩니다.        |
|            | `componentDidUpdate()`                     | 업데이트가 DOM에 반영된 직후에 호출됩니다. 이전 props나 state에 접근할 수 있습니다.                        |
| **마운트 해제** | `componentWillUnmount()`                   | 컴포넌트가 마운트 해제되기 직전에 호출됩니다. 타이머 제거, 네트워크 요청 취소 등의 정리 작업에 사용됩니다.       |
| **오류 처리**  | `static getDerivedStateFromError()`        | 자식 컴포넌트에서 오류가 발생했을 때 호출됩니다. 오류에 따른 상태 업데이트에 사용됩니다.                     |
|            | `componentDidCatch()`                      | 에러가 발생한 후 실행할 로직을 정의할 때 사용됩니다. 주로 에러 로깅에 사용됩니다.                          |


## 마운트 (Mounting)

컴포넌트가 DOM에 삽입되는 과정입니다. 이 단계에서 호출되는 메서드는 다음과 같습니다.

- `constructor()`: 컴포넌트의 생성자 함수로, 컴포넌트의 초기 상태를 설정하거나 메서드 바인딩을 할 때 사용됩니다.
- `static getDerivedStateFromProps()`: props로 받은 값을 state에 동기화할 때 사용됩니다. 최초 마운팅 시와 갱신 시 모두에서 호출됩니다.
- `render()`: 컴포넌트의 UI를 렌더링하는 메서드입니다. React 요소를 반환합니다.
- `componentDidMount()`: 컴포넌트가 마운트된 직후, 즉 DOM 트리에 삽입된 직후에 호출됩니다. DOM 노드에 접근하거나, 외부 데이터 요청과 같은 사이드 이펙트를 발생시킬 작업을 수행합니다.

## 업데이트 (Updating)

컴포넌트의 props나 state가 변경될 때 발생합니다. 이 단계에서 호출되는 메서드는 다음과 같습니다.

- `static getDerivedStateFromProps()`: 컴포넌트가 갱신될 때마다 호출됩니다. props의 변화를 state에 반영하고자 할 때 사용됩니다.
- `shouldComponentUpdate()`: 컴포넌트의 갱신 여부를 결정합니다. false를 반환하면 갱신 과정은 중단됩니다.
- `render()`: 컴포넌트의 UI를 렌더링합니다.
- `getSnapshotBeforeUpdate()`: 가장 최근의 렌더 출력 결과가 DOM에 반영되기 직전에 호출됩니다. DOM 상태에 대한 정보 (예: 스크롤 위치)를 캡처할 때 사용됩니다.
- `componentDidUpdate()`: 컴포넌트의 갱신이 DOM에 반영된 직후에 호출됩니다. 이전 props나 state에 접근할 수 있습니다.

## 마운트 해제 (Unmounting)

컴포넌트가 DOM에서 제거되는 단계입니다.

- `componentWillUnmount()`: 컴포넌트가 마운트 해제되기 직전에 호출됩니다. 타이머 제거, 네트워크 요청 취소, 구독 해제 등의 정리 작업을 수행합니다.

## 오류 처리 (Error Handling)

자식 컴포넌트에서 오류가 발생했을 때 이를 캡처하고 대응하기 위한 메서드입니다.

- `static getDerivedStateFromError()`: 에러가 발생했을 때 이를 캡처하여 state를 업데이트할 수 있게 합니다.
- `componentDidCatch()`: 에러가 발생한 후 UI를 변경하거나 에러 로깅을 할 때 사용됩니다.

## 함수형 컴포넌트와 Hooks

함수형 컴포넌트에서는 클래스 컴포넌트의 생명주기 메서드에 해당하는 로직을 실행하기 위해 Hooks를 사용할 수 있습니다. `useState`, `useEffect`, `useContext` 등의 Hooks를 통해 상태 관리 및 사이드 이펙트 처리가 가능합니다.

- `useEffect`: 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 합니다. 클래스 컴포넌트의 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`에 해당하는 작업을 처리할 수 있습니다.
- `useState`: 함수형 컴포넌트에서 상태를 관리할 수 있도록 합니다. 클래스 컴포넌트의 `state`에 해당합니다.


## Docs
https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html


~~~.jsx
import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { date: new Date() };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    tick() {
        console.log('tick');
        this.setState({
            date: new Date()
        });

    }
    handleClick(){
        // Class Component는 this를 바인딩 해주어야 한다.
        alert(this.state.date)
    }

    handleClick2 = () => {
        // Arrow Function은 this를 바인딩 해주지 않아도 된다.
        alert(this.state.date)
    }

    render() {
        // console.log('render');
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello World</h1>
                <h2 onClick={this.handleClick2}>>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default ClassComponent;
~~~