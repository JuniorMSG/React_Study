// ChildComponent.js
import React from 'react';
import { useMessage } from './MessageContext';
import GrandchildComponent from './GrandchildComponent';

const ChildComponent = () => {
    const { message, updateMessage } = useMessage();

    return (
        <div>
            <h2>Child: {message}</h2>
            <button onClick={() => updateMessage('Updated by Child')}>Update Message</button>
            <GrandchildComponent />
        </div>
    );
};

export default ChildComponent;
