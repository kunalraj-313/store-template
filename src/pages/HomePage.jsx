import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="home-page">
      <div className="content">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>

        <div className="timestamp">
          {formatDate(currentTime)}
        </div>

        <nav className="navigation">
          <Link to="/store" className="nav-link">STORE</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <Link to="/lookbook" className="nav-link">LOOKBOOK</Link>
          <Link to="/return-policy" className="nav-link">RETURN POLICY</Link>
          <Link to="/pre-order-status" className="nav-link">PRE - ORDER STATUS</Link>
        </nav>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="instagram.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="youtube.png" alt="YouTube" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="tiktok.png" alt="TikTok" />
          </a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="soundcloud.png" alt="SoundCloud" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="discord.png" alt="Discord" />
          </a>
        </div>

        <footer className="footer">
          <div>¾ 2025, PREMIUM DEMO</div>
          <div>All Rights Reserved.</div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
