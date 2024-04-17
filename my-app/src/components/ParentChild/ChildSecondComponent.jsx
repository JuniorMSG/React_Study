import React from 'react';

function ChildSecondComponent({ onCustomEvent }) {
    return (
        <button onClick={() => onCustomEvent('Hello from child')}>
            Send Event to Parent
        </button>
    );
}

export default ChildSecondComponent;
