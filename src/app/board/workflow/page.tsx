// src/workflow/page.tsx

"use client";

import React, { useState } from 'react';
import './ChatBot.css';

interface Message {
  text: string;
  user: 'user' | 'bot';
}

const Workflow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const responses: { [key: string]: string } = {
    'What is the status of my complaint?': 'Your complaint is being processed.',
    'How do I lodge a complaint?': 'You can lodge a complaint by going to the complaints section and filling out the form.',
    'Who is the warden for Block A?': 'The warden for Block A is Mr. John Doe.'
  };

  const handleSendMessage = () => {
    const userMessage: Message = { text: input, user: 'user' };
    const botResponse: Message = { text: responses[input] || 'Please contact the HR.', user: 'bot' };
    const newMessages = [...messages, userMessage, botResponse];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="chat-bot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Workflow;
