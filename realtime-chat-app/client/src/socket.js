import { io } from "socket.io-client";

const socket = io("https://chat-app-5hzi.onrender.com");

export default socket;