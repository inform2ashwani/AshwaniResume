# Technical Document: Blog with Digital Resume, Interviewed Companies, Interview Details, and Q&A Backend Panel

## 1. Project Overview

This project is a portfolio-style application built with **React.js** and **Vite** for the frontend, with a planned backend powered by **Node.js**, **Express**, and **MongoDB**.

It is designed to present:
- A digital resume / portfolio
- A technical blog section
- Interviewed companies and interview experiences
- Interview question-and-answer sets managed from a backend panel

## 2. Purpose

The app is intended to showcase professional experience, job interview outcomes, and technical knowledge in a structured way. It supports:
- Personal branding through an interactive digital resume
- Publishing interview experiences and lessons learned
- Storing and displaying interview questions and answers
- Managing content from a backend admin panel

## 3. Target Users

- Recruiters and hiring managers
- Interviewers and engineering leads
- Developers reviewing career history and technical practice
- Visitors looking for interview preparation content

## 4. Architecture

### 4.1 Frontend

- **Framework**: React.js
- **Build tool**: Vite
- **Routing**: React Router (recommended, not yet installed)
- **State**: React hooks (`useState`, `useEffect`) or context for shared state
- **Styling**: CSS modules, plain CSS, or a CSS framework like Tailwind (optional)

### 4.2 Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based admin login for the backend panel (recommended)
- **API**: RESTful endpoints for content management

### 4.3 Data Flow

1. The React frontend fetches resume, blog, interview, and Q&A data from the backend.
2. The backend reads and writes documents in MongoDB.
3. Admin users manage content through the backend panel UI.
4. Public viewers see the latest published content from the frontend.

## 5. Core Features

### 5.1 Digital Resume

- Personal summary
- Work experience with company names and roles
- Education and certification details
- Skills and technology stack
- Contact section / social links

### 5.2 Blog Section

- List of blog posts
- Each post includes title, date, category, and content
- Tagging or category support for sorting topics
- Optional markdown or rich text content

### 5.3 Interviewed Company Section

- Company name and role applied for
- Interview date and format
- Interview stage details
- Outcome summary and learnings

### 5.4 Interview Q&A Panel

- Question list organized by company or topic
- Answers and follow-up notes
- Backend panel CRUD for questions and answers
- Optional filtering by difficulty or category

## 6. Data Model

### MongoDB Collections

#### `users`
- `_id`
- `name`
- `email`
- `passwordHash`
- `role` (`admin`, `editor`)
- `createdAt`
- `updatedAt`

#### `resume`
- `_id`
- `section`
- `title`
- `content`
- `items` (array of subitems)
- `order`
- `updatedAt`

#### `posts`
- `_id`
- `title`
- `slug`
- `summary`
- `content`
- `category`
- `tags`
- `publishedDate`
- `status` (`draft`, `published`)
- `author`
- `updatedAt`

#### `interviews`
- `_id`
- `companyName`
- `role`
- `date`
- `location`
- `stageDetails` (array)
- `outcome`
- `learnings`
- `notes`
- `updatedAt`

#### `questions`
- `_id`
- `question`
- `answer`
- `companyName`
- `topic`
- `difficulty`
- `dateAdded`
- `updatedAt`
- `published`

## 7. API Design

### Public API Endpoints

- `GET /api/resume` — fetch resume sections
- `GET /api/posts` — list blog posts
- `GET /api/posts/:slug` — fetch single blog post
- `GET /api/interviews` — fetch interviewed companies
- `GET /api/questions` — fetch public question-and-answer records

### Admin API Endpoints

- `POST /api/auth/login` — obtain admin token
- `POST /api/posts` — create blog post
- `PUT /api/posts/:id` — update blog post
- `DELETE /api/posts/:id` — delete blog post
- `POST /api/interviews` — create interview entry
- `PUT /api/interviews/:id` — update interview entry
- `DELETE /api/interviews/:id` — delete interview entry
- `POST /api/questions` — create QA entry
- `PUT /api/questions/:id` — update QA entry
- `DELETE /api/questions/:id` — delete QA entry

## 8. Frontend Component Structure

Suggested structure:

- `src/App.jsx`
- `src/pages/Home.jsx`
- `src/pages/Resume.jsx`
- `src/pages/Blog.jsx`
- `src/pages/BlogPost.jsx`
- `src/pages/Interviews.jsx`
- `src/pages/QandA.jsx`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/ResumeSection.jsx`
- `src/components/PostCard.jsx`
- `src/components/InterviewCard.jsx`
- `src/components/QuestionCard.jsx`
- `src/services/api.js`

## 9. Backend Panel UX

The admin panel should support:
- Login / logout
- Dashboard summary of published content
- Create/edit blog posts
- Create/edit interview entries
- Create/edit question-and-answer items
- Toggle publish status for posts and questions
- Audit log or updated timestamps

## 10. Setup and Run Instructions

### Prerequisites

- Node.js 18+ installed
- MongoDB instance available locally or in the cloud

### Frontend

```bash
cd Ashwani_Net
npm install
npm run dev
```

### Backend (recommended structure)

Create a separate backend folder, for example `backend/`, with:

- `server.js`
- `routes/`
- `controllers/`
- `models/`
- `middleware/`

Install dependencies:

```bash
npm install express mongoose cors dotenv jsonwebtoken bcrypt
```

Run backend:

```bash
node server.js
```

### Environment variables

- `MONGO_URI`
- `JWT_SECRET`
- `PORT`

## 11. Deployment Notes

- Host the frontend on Vercel, Netlify, or GitHub Pages
- Host the backend on Render, Railway, Heroku, or a VPS
- Use MongoDB Atlas for production database storage
- Configure CORS and secure token handling

## 12. Future Enhancements

- Add search across blog posts and interview entries
- Add markdown editor for admin content
- Add analytics or visitor messages
- Add rating/filter by interview difficulty or outcome
- Add multi-language support for resume and blog content

## 13. Summary

This document defines a full-stack portfolio application with:
- React + Vite frontend
- MongoDB-backed content management
- Interview and Q&A publishing flow
- Admin backend panel for content control

The design supports expandable resume sections, interview storytelling, and technical question/answer management for career and interview preparation.
