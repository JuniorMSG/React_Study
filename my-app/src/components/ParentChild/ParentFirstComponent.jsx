import React, {useEffect, useState} from 'react';
import ChildFirstComponent from './ChildFirstComponent';

function ParentFirstComponent() {
    const [message, setMessage] = useState('');

    const handleEvent = (data) => {
        setMessage(data);
        console.log('Event received in parent:', data);
    };

    useEffect(() => {
        console.log('Parent component mounted');
        return () => {
            console.log('Parent component unmounted');
        };
    }, []);

    return (
        <div>
            <h1>Message: {message}</h1>
            <ChildFirstComponent onCustomEvent={handleEvent}
                                 message={message}
                                 setMessage={setMessage}/>

        </div>
    );
}

export default ParentFirstComponent;

