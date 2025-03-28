# ✈️ Flight Monitor Project

A full-stack web app to input and visualize flight data in real-time using **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 📁 Project Structure

```
flight-monitor-project/
├── backend/        # Node.js + Express + MongoDB
├── frontend/       # React + TypeScript client
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or [Atlas](https://www.mongodb.com/atlas))

---

### 📆 1. Clone the Project

```bash
git clone <repo-url>
cd flight-monitor-project
```

---

### 🔙 2. Setup & Run the Backend

```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/` with this content:

```
MONGO_URI=mongodb://localhost:27017/flightApp
PORT=5001
```

Then run the server:

```bash
node server.js
# OR if you have nodemon:
# npx nodemon server.js
```

Should print:
```
Connected to MongoDB
Server running on http://localhost:5001
```

---

### 🌐 3. Setup & Run the Frontend

In a new terminal window/tab:

```bash
cd frontend
npm install
npm start
```

The frontend will start on:  
```
http://localhost:3000
```

---

## ✍️ Features

- Input Altitude, HIS, and ADI values
- Save to MongoDB
- View latest entry as text
- Visualize flight indicators (altitude bar, heading, ADI color)
- Toggle between input, text, and visual modes

---

## 🧪 Testing the API (Optional)

You can test the backend directly:

```bash
curl -X POST http://localhost:5001/api/flight \
  -H "Content-Type: application/json" \
  -d '{"altitude": 1200, "his": 180, "adi": 50}'
```

---

## 💠 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Database**: MongoDB (with Mongoose)
- **UI**: Plain HTML/CSS (can be extended with Tailwind/Styled Components)

---

## 🤝 Contributing

Pull requests and issues are welcome!

---

> Built with ❤️ for learning, aviation, and awesome UIs.

