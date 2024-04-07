

## [JSX란?](https://ko.legacy.reactjs.org/docs/introducing-jsx.html)
React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과
연결된다는 사실을 받아들입니다.

React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 “컴포넌트”라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리합니다.
이후 섹션에서 다시 컴포넌트로 돌아오겠지만, JS에 마크업을 넣는 게 익숙해지지 않는다면 이 이야기가 확신을 줄 것입니다.

React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다고 생각합니다. 또한
React가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해줍니다.

JSX는 JavaScript의 문법 확장입니다. React 요소를 생성합니다. 예를 들어, 이 두 줄은 동일합니다.


~~~jsx
const element = <h1>Hello, world!</h1>;
~~~


JSX는 React.createElement()와 동일한 기능으로 작동합니다.
~~~jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
~~~
