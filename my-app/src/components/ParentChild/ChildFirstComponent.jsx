import React from 'react';

function ChildFirstComponent(props) {  // Use props directly here
    const { onCustomEvent, setMessage, message } = props;  // You can destructure specific props if needed

    const sendDataToParent = (data) => {
        if (onCustomEvent) {
            onCustomEvent('Data to send');  // Example usage, customize based on actual data handling
        }
        if (setMessage) {
            setMessage("1234");
        }
    };

    return (
        <div> {/* Adding a div as a wrapper for JSX */}
            {/*<ChildChildFirstComponent onCustomEvent={onCustomEvent}*/}
            {/*                          message={message}*/}
            {/*                          setMessage={setMessage}/>*/}

            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    );
}
export default ChildFirstComponent;
