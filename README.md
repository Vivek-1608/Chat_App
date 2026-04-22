# 💬 Real-Time Chat Application

A full-stack real-time chat application where multiple users can join rooms and exchange messages instantly. Built using modern web technologies with a focus on real-time communication, data consistency, and clean system design.

---

## 🚀 Live Demo

https://chat-app-five-virid-77.vercel.app/


---

## 🛠️ Tech Stack

### Frontend

* React.js
* Socket.IO Client
* Axios
* CSS (Custom styling)

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB (Mongoose)

---

## ✨ Features

* 🔴 Real-time messaging using WebSockets (Socket.IO)
* 🧑‍🤝‍🧑 Room-based chat system
* 💾 Message persistence with MongoDB
* 🔄 Auto-load previous messages on refresh
* 🚫 Duplicate message prevention using unique IDs
* 🔁 Reconnect & refresh handling
* 🎨 Clean and responsive UI

---

## 🧠 System Design Highlights

* Combined **REST APIs** (for initial data fetch) with **WebSockets** (for live updates)
* Ensured **data consistency** using unique message IDs
* Implemented **room-based broadcasting** using Socket.IO
* Handled **edge cases** like duplicate messages and reconnect scenarios

---

## 📁 Project Structure

```
realtime-chat-app/
│
├── client/        # React frontend
├── server/        # Node.js backend
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Vivek-1608/Chat_App
cd realtime-chat-app
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🔐 Environment Variables

| Variable  | Description               |
| --------- | ------------------------- |
| MONGO_URI | MongoDB connection string |
| PORT      | Backend server port       |

---

## 📌 Future Improvements

* Typing indicators
* Online users list
* Authentication system
* Better mobile responsiveness
* Message read receipts

---

## 👨‍💻 Author

**Vivek Sathish**

* GitHub: https://github.com/Vivek-1608
* LinkedIn: https://www.linkedin.com/in/vivek-s-039701260/

---

## ⭐ Notes

This project was built as part of a real-time system design assessment, focusing on backend logic, real-time communication, and data consistency over UI complexity.
