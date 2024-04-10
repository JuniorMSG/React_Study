import React from 'react';

function Event() {

    const handleButtonClick = () => {
        console.log('Hello World => 호출순서 3');
    }
    const handleClickCapture = () => {
        console.log('Hello World Capture1');
    }

    const handleClickCapture2 = () => {
        console.log('Hello World Capture2');
    }
    const handleClickBubble = () => {
        console.log('Hello World Bubble');
    }

    const onMouseLeave = () => {
        console.log('onMouseLeave');
    }

    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick} onMouseLeave={onMouseLeave}>Hello World</button>
            </div>
        </div>
    )
}

export default Event;