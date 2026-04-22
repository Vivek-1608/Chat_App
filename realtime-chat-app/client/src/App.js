import React, { useState } from "react";
import Chat from "./Chat";
import socket from "./socket";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("joinRoom", { username, room });
      setJoined(true);
    }
  };

  return (
    <div className="app">
      {!joined ? (
        <div className="join-container">
          <div className="join-card">
            <h1>💬 Chat App</h1>
            <p>Join a room and start chatting instantly</p>

            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter room ID"
              onChange={(e) => setRoom(e.target.value)}
            />

            <button onClick={joinRoom}>Join Chat</button>
          </div>
        </div>
      ) : (
        <Chat username={username} room={room} />
      )}
    </div>
  );
}

export default App;