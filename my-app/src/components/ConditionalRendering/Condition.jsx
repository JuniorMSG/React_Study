import React from 'react';

function UserGreeting(props) {
    return <h1>{props.name && `${props.name},`} Welcome back! {props.count ? `It's ${props.count} times` : null}</h1>
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