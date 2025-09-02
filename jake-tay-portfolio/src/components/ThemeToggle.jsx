import './ThemeToggle.css';

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span>{isDarkMode ? '☀️' : '🌙'}</span>
    </button>
  );
}