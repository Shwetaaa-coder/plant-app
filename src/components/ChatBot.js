// // src/components/ChatBot.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './ChatBot.css';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'Hi! Ask me anything about your plants. 🌿' }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { sender: 'user', text: input.trim() };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-3.5-turbo',
//           messages: [
//             { role: 'system', content: 'You are a helpful plant care assistant.' },
//             ...messages.map(m => ({
//               role: m.sender === 'user' ? 'user' : 'assistant',
//               content: m.text
//             })),
//             { role: 'user', content: input }
//           ]
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       const botReply = response.data.choices[0].message.content;
//       setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
//     } catch (err) {
//       console.error(err);
//       setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, something went wrong. 🌧️' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-window">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-bubble ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//         {loading && <div className="chat-bubble bot">Typing...</div>}
//       </div>

//       <form className="chat-input" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Ask something about your plants..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit" disabled={loading}>Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatBot;

import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about plants." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input.trim() };

    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful plant assistant." },
            ...messages
              .filter((m) => m.sender === "user" || m.sender === "bot")
              .map((m) => ({
                role: m.sender === "user" ? "user" : "assistant",
                content: m.text,
              })),
            { role: "user", content: input.trim() },
          ],
          max_tokens: 100,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI error: ${response.statusText}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((msgs) => [...msgs, { sender: "bot", text: "Sorry, something went wrong." }]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="chat-shell">
      <div className="chat-container">
        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="chat-bubble bot">Typing...</div>}
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your plant question..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
