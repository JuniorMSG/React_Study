import React, { useState } from 'react';
import ChildSecondComponent from "./ChildSecondComponent";

function ParentSecondComponent() {
    const [message, setMessage] = useState('');


    const handleEvent = (data) => {
        setMessage(data);
        console.log('Event received in parent:', data);
    };

    return (
        <div>
            <h1>Message: {message}</h1>
            <ChildSecondComponent onCustomEvent={handleEvent} />

        </div>
    );
}

export default ParentSecondComponent;
