<!-- TOC -->
  * [조건부 렌더링(conditional-rendering)](#조건부-렌더링conditional-rendering)
  * [Docs](#docs)
<!-- TOC -->

## 조건부 렌더링(conditional-rendering)
&& condition && A, falsy 주의 (숫자0)
삼항연산자 condition ? A : B
안그리고 싶은 경우 Return null;


```jsx 
import React from 'react';

function UserGreeting(props) {
    return <h1>{props.name && `${props.name},`} Welcome back! {props.count ? `It's ${props.count} times` : null}</h1>
    // return <h1>{props.name && `${props.name},`} Welcome back! {Boolean(props.count) && `It's ${props.count} times`}</h1>
    
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    return props.isLoggedIn ? <UserGreeting name={"MSG"} count={0}/> : <GuestGreeting />
}

function Condition(props) {
    const isLoggedIn = true
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    );
}

export default Condition;
```


## Docs
[조건부 랜더링](https://ko.legacy.reactjs.org/docs/conditional-rendering.html)