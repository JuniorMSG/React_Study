import React from 'react';

function List(props) {
    const todos = [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'},
        {id: 4, text: 'text4'},
        {id: 5, text: 'text5'},
    ]
    const Item = (props) => {
        // key는 고유성을 식별하기 위해서만 사용하므로 전달되지 않는다.
        console.log(props)
        return (
            <li>{props.text}</li>
        )
    }
    const todoList = todos.map(todo => <Item key={todo.id} id={todo.id} text={todo.text}/>)
    return (
        todoList
    )
}

export default List;