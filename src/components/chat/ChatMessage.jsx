'use client';
import React from 'react';


const ChatMessage = ({ message, isUser }) => {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div
                className={`${isUser
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900'
                    } rounded-2xl px-4 py-3 max-w-[80%] backdrop-blur-lg border border-white/10`}
            >
                <p className="text-white text-sm md:text-base">{message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;