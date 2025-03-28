# ✈️ Flight Monitor Project

A full-stack web app to input and visualize flight data in real-time using **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 📁 Project Structure

```
flight-monitor-project/
├── backend/        # Node.js + Express + MongoDB
│   └── .env.example ✅
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
git clone https://github.com/beydonce/flight-monitors-project.git
cd flight-monitor-project
```

---

### 🔙 2. Setup & Run the Backend

```bash
cd backend
npm install
```

#### ✅ Copy `.env.example` and rename it to `.env`:

```bash
cp .env.example .env
```

Your `.env` file should contain:

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

Expected output:

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
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Usage

1. Make sure both frontend and backend are running
2. Open your browser at [http://localhost:3000](http://localhost:3000)
3. Click the ➕ `+` button to enter flight data
4. Then click `TEXT` or `VISUAL` to view the data display

---

## ✍️ Features

- Input Altitude, HIS, and ADI values
- Save data to MongoDB via Express API
- View latest entry as text
- Visualize flight indicators (altitude bar, heading compass, ADI)
- Toggle between input form, text display, and visual panel

---

## ❓ Troubleshooting

- Make sure MongoDB is running locally on port `27017`
- If you get `MongoDB error: connection refused`, double-check your `.env`
- If the frontend shows a CORS error, make sure the backend is running on port `5001`
- If `npm start` or `npm install` fails, make sure you're in the correct folder (`frontend` or `backend`)

---

## 💠 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)

---

## 🙌 Author

Built by [@beydonce](https://github.com/beydonce) — for IAF
