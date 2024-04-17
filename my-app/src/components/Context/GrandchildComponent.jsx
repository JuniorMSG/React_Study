// GrandchildComponent.js
import React from 'react';
import { useMessage } from './MessageContext';

const GrandchildComponent = () => {
    const { message, updateMessage } = useMessage();

    return (
        <div>
            <h3>Grandchild: {message}</h3>
            <button onClick={() => updateMessage('Updated by Grandchild')}>Update Message</button>
        </div>
    );
};

export default GrandchildComponent;
