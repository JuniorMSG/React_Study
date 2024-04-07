import React from "react";


function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    console.log(`Comment ::  ${props.author.avatarUrl}`)
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://naver.com'
    }
};


export default function Extraction() {
    return (
        <Comment
            date={comment.date}
            text={comment.text} author={comment.author} />
    )
}