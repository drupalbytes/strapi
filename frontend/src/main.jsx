import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './index.css'

// Pages / Sections
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Post from './Post.jsx'
import Cta from './Cta.jsx'
import Footer from './Footer.jsx'
import PostDetail from './PostDetail.jsx'
import PageDetail from './PageDetail.jsx'

// Home page — all your existing sections together
const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Post />
    <Cta />
    <Footer />
  </>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<Home />} />

        {/* Post detail page */}
        <Route path="/posts/:slug" element={<PostDetail />} />
        <Route path="/:slug"   element={<PageDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
