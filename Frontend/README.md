# 🚀 Gisell Tavarez — Developer Portfolio

### Repository: `gisell-tavarez-dev-portfolio`

Welcome to the source code for my personal developer portfolio.  
This project was designed to highlight my experience as a **full-stack developer**, **UX-driven engineer**, and **problem-solving paramedic** transitioning into tech.

Built with a modern, futuristic UI theme inspired by neon gradients, bold typography, and clean layout structure.

---

## ✨ Features

### 🎨 Modern Tech-Themed UI

- Dark gradient background
- Neon accent colors (cyan & purple)
- Smooth-scroll navigation
- Responsive section-based layout

### 💻 Full-Stack App

- React SPA (frontend)
- Node + Express (backend API)
- Project cards fetched from API

### 📂 Organized Sections

- Hero / Intro
- About
- Skills & Tools
- Featured Projects
- Contact Form
- Footer

### 📬 Functional Contact Form

- Sends POST request to Express server
- Ready for integration with Nodemailer, Gmail SMTP, SendGrid, etc.

---

## 🛠️ Tech Stack

### Frontend

- **React (Vite)**
- CSS3 (custom theme variables)
- Modern component-based architecture

### Backend

- **Node.js**
- **Express**
- CORS + JSON middleware

### Tools

- Git & GitHub
- Google Fonts (Space Grotesk, Inter)
- Postman (for API testing)
- Google Cloud (optional deployment)

---

## 📁 Project Structure

```
client/          # React SPA
server/          # Express API
```

---

## ⚡ Installation

### 1️⃣ Clone the repo

```sh
git clone https://github.com/GTavarez/gisell-tavarez-dev-portfolio.git
cd gisell-tavarez-dev-portfolio
```

### 2️⃣ Install frontend

```sh
cd client
npm install
npm run dev
```

### 3️⃣ Install backend

```sh
cd ../server
npm install
npm run dev
```

---

## 🚦 Running the application

**Frontend:**  
Runs at → `http://localhost:5173`

**Backend:**  
Runs at → `http://localhost:5000`

---

## 🌐 API Routes

### ➤ GET `/api/projects`

Returns featured project list.

### ➤ POST `/api/contact`

Expected JSON body:

```json
{
  "name": "Your name",
  "email": "user@example.com",
  "message": "Hello!"
}
```

---

## 🔮 Future Enhancements

- Add a blog section
- Add case studies for HuskiesHub & Smart Budget Planner
- Add animations (Framer Motion)
- Make the Projects grid sortable/filterable
- Deploy backend to Cloud Run
- Deploy frontend to Vercel or Netlify

---

## 🎨 Branding Guide

### Colors

| Label         | Hex       |
| ------------- | --------- |
| Background    | `#050816` |
| Surface       | `#0f172a` |
| Accent Cyan   | `#38bdf8` |
| Accent Purple | `#a855f7` |
| Text Primary  | `#e5e7eb` |
| Text Muted    | `#9ca3af` |

### Fonts

- **Space Grotesk** — headings
- **Inter** — body text

---

## 🧪 Commit Convention

Use this structure:

```
feat: new component added
fix: bug fix
style: css/theme changes
refactor: code restructuring
docs: updated README
```

Examples:

```
feat: added Projects section
style: created theme.css neon accents
fix: contact form API error
```

---

## 🚀 Deployment Guides

### ▪ Frontend on **Vercel**

1. Push repo to GitHub
2. Import repo on Vercel
3. Select `/client` as project root
4. Set build command: `npm run build`
5. Set output dir: `dist`

### ▪ Backend on **Cloud Run**

1. Install Google Cloud CLI
2. Build container
3. Deploy:

```sh
gcloud run deploy portfolio-api \
  --source . \
  --region=us-central1 \
  --allow-unauthenticated
```

---

## 👋 Contact

📧 Email: _your email here_  
🐙 GitHub: [GTavarez](https://github.com/GTavarez)

---

### ⭐ If you like this portfolio, consider giving the repo a star!

Thank you for visiting! 🚀
