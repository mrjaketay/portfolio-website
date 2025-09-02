import './Header.css'; // We'll create this next

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Jake Tay</h1>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}