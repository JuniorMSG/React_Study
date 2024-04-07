import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


export default function Compositin() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Temp" />
            <Comment name="Temp" />
        </div>
    )
}