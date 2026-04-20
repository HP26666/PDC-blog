import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100 relative scanlines">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
