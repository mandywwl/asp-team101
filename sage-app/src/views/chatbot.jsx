import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import NavMenu from '../components/NavMenu.jsx';
import '../index.css';
import logo from '/sage-logo.png';

function Chatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I assist you today?" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput('');

        // Replace this mock response with a call to the OpenAI API
        const response = "I'm here to help with any questions or concerns you have.";
        setMessages([...newMessages, { sender: "bot", text: response }]);
    };

    return (
        <div className='mainViewBody relative'>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="chat-container p-4 max-w-3xl mx-auto"> {/* Increased the max width to 3xl (1.5 times wider) */}
                <div className="chat-header flex justify-center items-center mb-4"> {/* Flex container for logo and title */}
                    <img src={logo} alt="Chatbot Logo" className="w-16 h-16" />
                    <h1 className="ml-4 text-2xl font-semibold text-teal-700">Mental Health Companion</h1> {/* Title next to logo */}
                </div>
                <div className="chatbox bg-white p-6 rounded-lg shadow-md h-[32rem] overflow-y-scroll"> {/* Shorter height, rounded-lg corners */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                            <p className={`p-3 my-2 rounded ${msg.sender === 'bot' ? 'bg-gray-200' : 'bg-teal-500 text-white'}`}>
                                {msg.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="input-box mt-4 flex">
                    <input
                        type="text"
                        className="flex-grow p-3 border rounded-l-lg"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        className="bg-teal-500 text-white p-3 rounded-r-lg"
                        onClick={handleSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;