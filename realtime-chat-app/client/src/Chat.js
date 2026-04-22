import React, { useEffect, useState, useRef } from "react";
import socket from "./socket";
import axios from "axios";
import "./Chat.css";

function Chat({ username, room }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const bottomRef = useRef();

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`https://chat-app-5hzi.onrender.com/messages/${room}`);
      setMessageList(res.data);
    };

    fetchMessages();

    socket.on("receiveMessage", (data) => {
      setMessageList((list) => {
        const exists = list.find((msg) => msg.id === data.id);
        if (exists) return list;
        return [...list, data];
      });
    });

    return () => socket.off("receiveMessage");
  }, [room]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const sendMessage = () => {
    if (message !== "") {
      socket.emit("sendMessage", { room, username, message });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h2>Room: {room}</h2>

        <div className="messages">
          {messageList.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.username === username ? "own" : "other"
              }`}
            >
              <div className="meta">
                <span className="user">{msg.username}</span>
                <span className="time">{msg.time}</span>
              </div>
              <div className="text">{msg.message}</div>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        <div className="input-area">
          <input
            value={message}
            placeholder="Type message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;