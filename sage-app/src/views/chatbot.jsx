import React, { useState } from 'react';
import axios from 'axios';
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

        try {
            // Send the user's message to the backend API
            const response = await axios.post('http://localhost:5000/api/users/chat', { message: input });
            const botResponse = response.data.botMessage;

            // Update the chatbox with the bot's response
            setMessages([...newMessages, { sender: "bot", text: botResponse }]);
        } catch (error) {
            console.error('Chatbot Error:', error.response ? error.response.data : error.message);
            setMessages([...newMessages, { sender: "bot", text: "Sorry, there was an error processing your request." }]);
        }
    };

    return (
        <div className='mainViewBody flex flex-col h-screen'>
            <NavMenu className='md:max-xl:order-first sm:order-last' />
            <div className="p-4 max-w-3xl mx-auto flex-grow flex flex-col justify-between">
                <div className="flex justify-center items-center">
                    <img src={logo} alt="Chatbot Logo" className="w-16 h-16 md:w-16 md:h-16" />
                </div>
                <div id="chatPreview" className="bg-white p-6 rounded-lg shadow-md h-80 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                            <p className={`p-3 my-2 rounded ${msg.sender === 'bot' ? 'bg-gray-200' : 'bg-teal-500 text-white'}`}>
                                {msg.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="input-box flex mb-3 pb-11">
                    <input
                        type="text"
                        className="flex-grow p-3 border rounded-l-lg"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
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
