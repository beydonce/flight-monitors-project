# ✈️ Flight Monitor Project

A full-stack web app to input and visualize flight data in real-time using **React**, **Node.js**, **Express**, and **MongoDB** — with optional **Docker** support for easy setup.

---

## 📁 Project Structure

```
flight-monitor-project/
├── backend/        # Node.js + Express + MongoDB
│   └── .env.example ✅
├── frontend/       # React + TypeScript client
├── docker-compose.yml ✅
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (for containerized setup)
- [MongoDB](https://www.mongodb.com/) (only for non-Docker local setup)

---

## 📦 Option 1: Run with Docker (Recommended)

This method runs **frontend**, **backend**, and **MongoDB** in containers automatically.

### 🧱 1. Build and Run All Services

```bash
docker compose up --build
```

This will:
- Build the frontend and backend Docker images
- Start MongoDB in a container
- Connect all services
- Serve frontend at: http://localhost:3000
- Serve backend API at: http://localhost:5001/api/flight

### 🛑 2. Stop the App

```bash
Ctrl + C
docker compose down
```

---

## 💻 Option 2: Manual Setup (Without Docker)

---

### 📆 1. Clone the Project

```bash
git clone https://github.com/beydonce/flight-monitor-project.git
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
http://localhost:3000

---

## 🧪 Usage

1. Make sure both frontend and backend are running
2. Open your browser at http://localhost:3000
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

- If using Docker, make sure ports 3000, 5001, and 27017 are free
- If using local MongoDB, ensure it's running on port 27017
- If you get "MongoDB error: connection refused", double-check your `.env`
- If the frontend shows a CORS error, make sure the backend is running on port 5001
- If `npm start` or `npm install` fails, make sure you're in the correct folder (`frontend` or `backend`)

---

## 💠 Tech Stack

- **Frontend**: React + TypeScript + Nginx (Docker)
- **Backend**: Node.js + Express
- **Database**: MongoDB (local or Docker)
- **DevOps**: Docker + Docker Compose
- **CI/CD**: GitHub Actions (optional)

---

## 🙌 Author

Built by [@beydonce](https://github.com/beydonce) — for IAF ✈️  
Full-stack meets DevOps 🤝
