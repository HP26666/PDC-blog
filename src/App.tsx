import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import TeachingDetail from './pages/TeachingDetail';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col aurora-bg text-fg">
        <Navbar />
        <main className="flex-1 relative z-[1]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/teaching/:slug" element={<TeachingDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
