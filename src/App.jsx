import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import SplashPage from './SplashPage';
import RetroSite from './RetroSite';

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setLightMode(true);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/retro" element={<RetroSite lightMode={lightMode} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;