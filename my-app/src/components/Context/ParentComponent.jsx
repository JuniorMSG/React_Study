// ParentComponent.js
import React from 'react';
import { useMessage } from './MessageContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const { message, updateMessage } = useMessage();

    return (
        <div>
            <h1>Parent: {message}</h1>
            <button onClick={() => updateMessage('Updated by Parent')}>Update Message</button>
            <ChildComponent />
        </div>
    );
};

export default ParentComponent;
