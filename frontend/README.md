# 🚀 Achyutha Sushanth Ariga — Portfolio

Personal portfolio website built with React + Vite (frontend) and Node.js + Express (backend).

🌐 **Live:** [portfolio-frontend-6f1w.onrender.com](https://portfolio-frontend-6f1w.onrender.com)

---

## Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- Framer Motion

**Backend**
- Node.js + Express
- Nodemailer (Gmail SMTP)
- CORS

**Deployment**
- Frontend → Render (Static Site)
- Backend → Render (Web Service)
- Uptime monitoring → UptimeRobot

---

## Features

- Responsive dark-theme portfolio
- Animated sections with Framer Motion
- Working contact form that sends real emails
- Sections: Hero, Experience, Projects, Skills, Contact

---

## Local Development

**Clone the repo**
```bash
git clone https://github.com/achyuth706/portfolio-react.git
cd portfolio-react
```

**Run frontend**
```bash
cd frontend
npm install
npm run dev
```

**Run backend**
```bash
cd backend
npm install
npm run dev
```

**Environment variables**

Create `backend/.env`:
```
GMAIL_USER=your@gmail.com
GMAIL_PASS=your-app-password
ALLOWED_ORIGINS=http://localhost:5173
```

Create `frontend/.env`:
```
VITE_API_URL=http://localhost:5000
```

Frontend runs at `http://localhost:5173`
Backend runs at `http://localhost:5000`

---

## Project Structure
```
portfolio-react/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── backend/           # Node.js + Express API
    ├── server.js
    └── package.json
```

---

## Contact

- 📧 achyuthariga@gmail.com
- 💼 [linkedin.com/in/achyuthariga](https://linkedin.com/in/achyuthariga)
- 🐙 [github.com/achyuth706](https://github.com/achyuth706)