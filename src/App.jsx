import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Games from './pages/Games';
import GamePlay from './pages/GamePlay';
import Contact from './pages/Contact';
import './styles/colors.css';
import './styles/animations.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:game" element={<GamePlay />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
