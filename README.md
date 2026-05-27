# 🚀 Emer Portfolio

A modern full-stack developer portfolio built with React and FastAPI to showcase projects, skills, achievements, and contact information.

## 🌐 Live Demo

Frontend: https://emer-portfolio.vercel.app/

Backend API: https://emer-backend.onrender.com

---

# ✨ Features

- Modern responsive UI
- Smooth animations
- React frontend
- FastAPI backend
- MongoDB database integration
- Contact/API integration
- Project showcase section
- Skills section
- Resume download
- Mobile-friendly design
- API documentation with Swagger

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript

## Backend
- FastAPI
- Python
- Uvicorn

## Database
- MongoDB Atlas

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```bash
emerPortfolio/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
│
└── README.md
```

---

# ⚙️ Backend Setup

## 1. Navigate to backend

```bash
cd backend
```

## 2. Create virtual environment

```bash
python -m venv venv
```

## 3. Activate virtual environment

### Windows (Git Bash)

```bash
source venv/Scripts/activate
```

### Windows (CMD)

```bash
venv\Scripts\activate
```

---

## 4. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 5. Create `.env`

```env
MONGO_URL=your_mongodb_connection_string
DB_NAME= test_database
CORS_ORIGINS=*
```

---

## 6. Run backend

```bash
uvicorn server:app --reload
```

Backend runs at:

```bash
http://127.0.0.1:8000
```

Swagger docs:

```bash
http://127.0.0.1:8000/docs
```

---

# ⚙️ Frontend Setup

## 1. Navigate to frontend

```bash
cd frontend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run frontend

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 🚀 Deployment

## Frontend Deployment
- Hosted on Vercel

## Backend Deployment
- Hosted on Render

## Database
- MongoDB Atlas Cloud Database

---

# 📌 API Endpoints

## Root API

```http
GET /
```

---

## API Home

```http
GET /api
```

---

## Create Status

```http
POST /api/status
```

### Request Body

```json
{
  "client_name": "Prince"
}
```

---

## Get Status

```http
GET /api/status
```

---

# 📸 Screenshots

Add your project screenshots here.

---

# 👨‍💻 Author

## Prince

- GitHub: https://github.com/princebaranwal07
- LinkedIn: https://linkedin.com/in/princeb01
- Portfolio: https://emer-portfolio.vercel.app/

---

# ⭐ Future Improvements

- Dark/Light mode
- Blog section
- Admin dashboard
- Authentication
- Email integration
- Analytics dashboard
- SEO optimization

---

# 📄 License

This project is licensed under the Prince.dev License.
