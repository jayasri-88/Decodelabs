# 🚀 Task 2 — Backend API Development

## 📌 Objective
Develop a simple backend API to handle application logic including user input processing, validation, and response handling.

---

## 🎯 Features
- REST API with GET and POST endpoints
- Server-side validation
- JSON request/response handling
- Modular code structure
- Error handling implemented

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- CORS
- dotenv
- Nodemon

---

## 📂 Project Structure
Task2/
│
├── index.js
├── routes/
│ └── userRoutes.js
├── controllers/
│ └── userController.js
├── .env
└── package.json

---

## ⚙️ Installation

```bash
npm install

## ▶️ Run the Server
Development mode
npm run dev
Production mode
npm start

Server runs at:
http://localhost:5000

🔌 API Endpoints
➜ POST /api/users
Create a new user
➜ GET /api/users
Fetch all users
🧪 Testing
Tested using:
Postman
Browser (GET endpoints)