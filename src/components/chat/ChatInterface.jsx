'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Image as ImageIcon, Maximize2, Minimize2 } from 'lucide-react';
import Image from 'next/image';

const ChatMessage = ({ message, type, isUser, imageUrl }) => {
    const showAvatar = type === 'text' || (type === 'image' && imageUrl);

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-2 max-w-full`}>
            {!isUser && showAvatar && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0"
                >
                    <Bot size={14} className="text-white" />
                </motion.div>
            )}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[85%] rounded-2xl px-4 py-2 ${isUser
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}
            >
                {type === 'image' ? (
                    <div className="space-y-2">
                        <p className="text-sm mb-2">{message}</p>
                        {imageUrl && (
                            <div className="relative aspect-[4/5] w-full min-w-[280px] max-w-[400px] overflow-hidden rounded-lg">
                                <Image
                                    src={imageUrl}
                                    alt={message}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-sm">{message}</p>
                )}
            </motion.div>
            {isUser && showAvatar && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0"
                >
                    <User size={14} className="text-white" />
                </motion.div>
            )}
        </div>
    );
};

const ChatInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isImageMode, setIsImageMode] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (messageText) => {
        try {
            setIsLoading(true);
            const userMessage = {
                text: messageText,
                isUser: true,
                type: isImageMode ? 'image' : 'text'
            };
            setMessages((prev) => [...prev, userMessage]);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: messageText,
                    type: isImageMode ? 'image' : 'text'
                }),
            });

            const data = await response.json();

            const aiMessage = {
                text: data.message,
                isUser: false,
                type: data.type,
                imageUrl: data.imageUrl
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Show error message in chat
            setMessages((prev) => [...prev, {
                text: "Sorry, I encountered an error. Please try again.",
                isUser: false,
                type: 'text'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Toggle Button - Highest z-index */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-[100] sm:bottom-6 sm:right-6 sm:p-4"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className={`fixed z-[90] transition-all duration-300 ${isExpanded
                            ? 'top-0 right-0 w-full h-full'
                            : 'bottom-16 right-4 w-[calc(100%-2rem)] sm:w-96 h-[500px] sm:bottom-24 sm:right-6'
                            }`}
                    >
                        <div className="h-full bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col border border-gray-800/50 overflow-hidden">
                            {/* Header */}
                            <motion.div
                                layout
                                className="p-4 border-b border-gray-800/50 bg-gradient-to-r from-purple-600/10 to-pink-600/10 flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Bot size={20} className="text-purple-500" />
                                        XWizard AI
                                    </h3>
                                    <p className="text-xs text-gray-400">AI Assistant & Image Generator</p>
                                </div>
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                                >
                                    {isExpanded ? (
                                        <Minimize2 size={20} className="text-gray-400" />
                                    ) : (
                                        <Maximize2 size={20} className="text-gray-400" />
                                    )}
                                </button>
                            </motion.div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                                {messages.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-gray-500 py-8"
                                    >
                                        <Bot size={40} className="mx-auto mb-4 text-purple-500" />
                                        <p className="text-sm">Hi! I&apos;m XWizard AI. How can I help you today?</p>
                                    </motion.div>
                                )}
                                {messages.map((msg, index) => (
                                    <ChatMessage
                                        key={index}
                                        message={msg.text}
                                        type={msg.type}
                                        isUser={msg.isUser}
                                        imageUrl={msg.imageUrl}
                                    />
                                ))}
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start items-end gap-2"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                            <Bot size={14} className="text-white" />
                                        </div>
                                        <div className="bg-gray-800 rounded-2xl px-4 py-2">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <motion.form
                                layout
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const input = e.target.elements.message;
                                    const message = input.value.trim();
                                    if (message) {
                                        sendMessage(message);
                                        input.value = '';
                                    }
                                }}
                                className="p-4 border-t border-gray-800/50"
                            >
                                <div className="flex gap-2">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        onClick={() => setIsImageMode(!isImageMode)}
                                        className={`p-2 rounded-xl transition-colors ${isImageMode
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                            : 'bg-gray-800 text-gray-400'
                                            }`}
                                    >
                                        <ImageIcon size={20} />
                                    </motion.button>
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder={isImageMode ? "Describe the image you want..." : "Type your message..."}
                                        className="flex-1 bg-gray-800/50 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 text-sm"
                                        autoComplete="off"
                                    />
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
                                        disabled={isLoading}
                                    >
                                        <Send size={20} />
                                    </motion.button>
                                </div>
                                {isImageMode && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xs text-gray-400 mt-2 ml-12"
                                    >
                                        Image generation mode is active
                                    </motion.p>
                                )}
                            </motion.form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatInterface;