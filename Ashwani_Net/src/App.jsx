import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Interviews from './pages/Interviews'
import QandA from './pages/QandA'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
