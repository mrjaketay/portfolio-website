import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ViewToggle from './components/ViewToggle';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import { ViewProvider } from './context/ViewContext';
import './components/Header.css'; // Import styles here

function App() {
  const [currentView, setCurrentView] = useState('va');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Update ThemeToggle to save theme
  const updateTheme = (newTheme) => {
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <ViewProvider>
      <Header />
      <Hero view={currentView} />
      <About />
      <Services />
      <Tools />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ViewProvider />

      {/* Floating buttons */}
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={updateTheme} />
        <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
        <BackToTop />
      <main>
        {/* We'll add sections here later */}
      </main>
    </ViewProvider>
  );
}
export default App;