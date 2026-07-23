# StadiumSense AI

StadiumSense AI is an AI-powered smart stadium management platform designed to enhance stadium operations through real-time monitoring, intelligent insights, and operational decision support. The platform provides a centralized dashboard for managing crowd density, parking availability, food court queues, weather conditions, volunteer status, and emergency alerts.

This project was developed as part of the **Smart Stadiums & Tournament Operations** challenge, with a focus on leveraging Artificial Intelligence to improve the fan experience and stadium management.

---

## Live Demo

🔗 https://stadium-sense-ai-two.vercel.app/

---

## Features

- Real-time stadium operations dashboard
- AI-generated operational summary
- Crowd monitoring and simulation
- Parking availability tracking
- Food court queue management
- Weather monitoring
- Volunteer status management
- Emergency alerts dashboard
- AI chatbot powered by Google Gemini
- RESTful API architecture
- Responsive user interface

---

## Technology Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Recharts

### Backend
- FastAPI
- SQLAlchemy
- APScheduler
- Pydantic

### Database
- SQLite

### AI
- Google Gemini API

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Architecture

```
                +---------------------+
                |     React Frontend  |
                |     (Vercel)        |
                +----------+----------+
                           |
                      REST API
                           |
                +----------v----------+
                |     FastAPI         |
                |      Backend        |
                +----------+----------+
                           |
          +----------------+----------------+
          |                                 |
     SQLite Database                 Google Gemini API
          |                                 |
          +----------------+----------------+
                           |
                 Stadium Operations Dashboard
```

---

## Dashboard Modules

- Crowd Monitoring
- Parking Management
- Food Court Queue Analysis
- Weather Status
- Volunteer Management
- Emergency Alerts
- AI Operational Summary
- AI Chat Assistant

---

## Installation

### Clone the repository

```bash
git clone https://github.com/dhanus22/StadiumSense-AI.git
cd StadiumSense-AI
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend directory.

Example:

```env
APP_NAME=StadiumSense AI

DATABASE_URL=sqlite:///./data/stadiumsense.db

GEMINI_API_KEY=YOUR_API_KEY
```

Run the backend server:

```bash
uvicorn app.main:app --reload
```

Backend will be available at:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend runs at:

```
http://localhost:5173
```

---

## Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| APP_NAME | Application name |
| DATABASE_URL | SQLite database URL |
| GEMINI_API_KEY | Google Gemini API Key |

---

## Folder Structure

```
StadiumSense-AI/
│
├── backend/
│   ├── app/
│   ├── data/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Future Enhancements

- PostgreSQL integration
- Live IoT sensor integration
- Authentication and role-based access
- Real-time notifications using WebSockets
- Predictive crowd analytics
- Mobile application
- Multi-language support

---

## Challenges Solved

During development, several practical challenges were addressed, including:

- FastAPI deployment on Render
- CORS configuration
- Database migration and path management
- Google Gemini API integration
- Frontend-backend communication
- Cloud deployment troubleshooting
- Responsive dashboard design

---

## Learning Outcomes

This project provided hands-on experience in:

- Full Stack Development
- REST API Design
- FastAPI
- React.js
- Generative AI Integration
- Cloud Deployment
- Database Management
- Debugging and Performance Optimization

---

## Acknowledgements

Developed as part of the **Smart Stadiums & Tournament Operations** challenge to explore the application of Artificial Intelligence in modern sports infrastructure.

---

## License

This project is intended for educational and demonstration purposes.
