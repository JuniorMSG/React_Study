<!-- TOC -->
<!-- TOC -->

## Error Boundary

React의 Error Boundary는 React 컴포넌트 트리 내에서 자식 컴포넌트의 JavaScript 에러를 잡아내고 처리하는 방법을 제공합니다.
컴포넌트 트리의 특정 부분이 예외적인 상황에서도 애플리케이션 나머지 부분의 정상적인 동작을 보장하기 위해 도입되었습니다.

### 생명주기 메서드(lifecycle methods) 또는 Hook을 통해 구현됩니다:

#### static getDerivedStateFromError(error):

에러가 발생했을 때 호출되며, 이를 이용해 컴포넌트의 상태를 업데이트 할 수 있습니다.
주로 UI를 에러 상태로 전환하는 데 사용됩니다.

#### componentDidCatch(error, info):

에러가 발생한 후에 호출되며, 에러에 대한 추가 로깅이나 오류 보고에 사용할 수 있습니다.
React 16.6 이후에는 useErrorBoundary Hook을 사용하여 함수 컴포넌트에서도 에러 바운더리를 구현할 수 있습니다.

### 사용되는 경우

* 컴포넌트 트리의 일부에서 발생할 수 있는 JavaScript 에러를 잡아내기 위해
* 에러가 발생했을 때 사용자에게 친근한 UI를 보여주기 위해
* 에러 발생시 로깅 또는 다른 오류 처리 작업을 수행하기 위해
* Error Boundary는 이벤트 핸들러, 비동기 코드(예: setTimeout 또는 requestAnimationFrame 콜백), 서버 사이드 렌더링,
  그리고 자식 컴포넌트에서 발생하지 않는 에러를 잡아내지 못합니다.

### 장점 
* 애플리케이션의 견고성을 높입니다.
* 예기치 않은 에러가 사용자 경험을 크게 저해하는 것을 방지할 수 있습니다. 
  * ex) 중요하지 않은 부분의 UI에서 작은 에러가 발생해도 전체 애플리케이션이 멈추지 않도록 할 수 있습니다.

## Fallback 처리란?

애플리케이션 개발에서 Fallback 처리는 예기치 않은 에러나 예외 상황에 대비해 미리 준비하는 안전장치입니다. 사용자에게 더 나은 경험을 제공하며, 문제가 발생했을 때 애플리케이션의 안정성을 유지할 수 있도록 돕습니다.

## 왜 Fallback 처리가 중요한가?

- **사용자 경험 보호**: 예외 상황 발생 시 사용자에게 안내 메시지를 제공하거나 대체 컨텐츠를 보여주어, 사용자의 혼란과 불편을 최소화합니다.
- **애플리케이션의 안정성 유지**: 에러가 애플리케이션의 다른 부분에 영향을 미치는 것을 방지하고, 애플리케이션을 계속 사용할 수 있도록 합니다.

## Fallback 전략

### 1. **에러 메시지 제공**
명확하고 이해하기 쉬운 에러 메시지를 통해 사용자가 발생한 문제를 인식하고, 필요한 조치를 취할 수 있도록 합니다.

### 2. **대체 컨텐츠 제공**
원래 제공하려던 컨텐츠가 사용 불가능한 경우, 대체 컨텐츠를 제공함으로써 사용자가 원하는 정보나 서비스를 계속 이용할 수 있게 합니다.

### 3. **재시도 메커니즘 구현**
일시적인 오류나 네트워크 문제로 인한 실패 시, 사용자가 쉽게 작업을 재시도할 수 있도록 ‘다시 시도하기’ 옵션을 제공합니다.

## 구현 시 고려사항

Fallback 처리를 효과적으로 구현하기 위해서는 다음과 같은 사항들을 고려해야 합니다:

- **사용자 중심의 접근**: 사용자의 필요와 경험을 우선시하여 설계해야 합니다.
- **명확성과 간결성**: 사용자가 쉽게 이해할 수 있도록 명확하고 간결한 메시지와 옵션을 제공해야 합니다.
- **디자인과의 일관성**: Fallback UI는 애플리케이션의 나머지 부분과 디자인과 일관성을 유지해야 합니다.

Fallback 처리는 애플리케이션의 사용자 경험과 안정성을 보장하는 중요한 전략입니다. 적절한 Fallback 처리를 통해 사용자는 문제 상황에서도 불편함 없이 서비스를 이용할 수 있게 됩니다.



~~~jsx
class ErrorBoundary extends React.Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        const {error} = this.state;
        const {fallback, children} = this.props;
        if (error) {
            return <this.props.fallback error={error}/>;
        }
        return this.props.children;
    }
}

const Child = () => {
    throw new Error("Somethig wrong....!");
    return <p>Child</p>;
};

const fallback = ({error}) => {
    alert(error.message);
    return <p style={{color: "red"}}>Error: {error.message}</p>
}
const App = () => {
    return <>
        <p>App</p>
        <ErrorBoundary fallback={fallback}>
            <Child/>
        </ErrorBoundary>
    </>
}

ReactDOM.render(<App/>, document.getElementById('root'));
~~~