
---

# 📁 Task 3 — README.md  
(**Database + CRUD Integration**)

```markdown
# 🚀 Task 3 — Database Integration & CRUD Operations

## 📌 Objective
Connect the backend API with MongoDB to store, retrieve, update, and delete application data.

---

## 🎯 Features
- MongoDB database connection
- Mongoose schema design
- Full CRUD operations
- Proper data validation
- Structured backend architecture
- Environment-based configuration

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## 📂 Project Structure
Task3/
│
├── config/
│ └── db.js
├── models/
│ └── User.js
├── routes/
│ └── userRoutes.js
├── index.js
├── .env
└── package.json

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Configure environment variables

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

▶️ Run the Server
npm run dev