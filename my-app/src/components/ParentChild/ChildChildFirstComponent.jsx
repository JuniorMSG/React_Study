import React, {useEffect, useState} from 'react';
import ChildFirstComponent from "./ChildFirstComponent";

function ChildChildFirstComponent (props) {
    const { onCustomEvent, setMessage, message } = props;
    // const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage('Child component mounted');
        return () => {
            console.log('Child component unmounted');
        };
    }, [])

    const my_message = (data) => {
        setMessage('handleEvent1:::::');
    }
    const handleEvent = (data) => {
        onCustomEvent('second Child Buttons - First');
    };

    const handleEvent2 = (data) => {
        onCustomEvent("second Child Buttons - Second"); // Example usage, customize based on actual data handling
    };


    return (
        <div>
            <h1>Message: {message}</h1><br/>
            <button onClick={my_message}>my_message_button</button>
            <br/>
            <button onClick={handleEvent}>second Child Buttons - First</button>
            <br/>
            <button onClick={handleEvent2}>second Child Buttons - Second</button>
            <br/>
        </div>
    );

}

export default ChildChildFirstComponent;
