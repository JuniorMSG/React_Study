// MessageContext.js
import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const useMessage = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState("Initial message");

    const updateMessage = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <MessageContext.Provider value={{ message, updateMessage }}>
            {children}
        </MessageContext.Provider>
    );
};
