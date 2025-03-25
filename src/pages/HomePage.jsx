import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import './styles/Carousel.css'; // Add a new CSS file for carousel styles

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentCard, setCurrentCard] = useState(0);

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

  const carouselItems = [
    { 
      to: "/madras", 
      text: "MADRAS", 
      subtext: "Classic madras patterns", 
      img: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=800&auto=format&fit=crop"
    },
    { 
      to: "/y2k", 
      text: "Y2K", 
      subtext: "Retro futuristic vibes", 
      img: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?w=800&auto=format&fit=crop"
    },
    { 
      to: "/minimals", 
      text: "MINIMALS", 
      subtext: "Less is more", 
      img: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=800&auto=format&fit=crop"
    },
    { 
      to: "/old-money", 
      text: "OLD MONEY", 
      subtext: "Timeless elegance", 
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop"
    },
    { 
      to: "/black", 
      text: "BLACK", 
      subtext: "Essential noir collection", 
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop"
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="home-page">
      <div className="content">
        <div className="timestamp">
          {formatDate(currentTime)}
        </div>

        <div className="carousel">
          <button className="carousel-button left" onClick={handlePrev}>‹</button>
          <div className="carousel-card-container">
            {carouselItems.map((item, index) => (
              <Link
                to={item.to}
                className={`carousel-card ${index === currentCard ? "active" : ""}`}
                key={index}
                style={{ 
                  transform: window.innerWidth > 768 
                    ? `translateX(${(index - currentCard) * 100}%)` 
                    : 'none' 
                }}
              >
                <div className="card-content">
                  <img src={item.img} alt={item.text} className="card-image" />
                  <div className="card-info">
                    <div className="card-title">{item.text}</div>
                    <div className="card-subtext">{item.subtext}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className="carousel-button right" onClick={handleNext}>›</button>
        </div>

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
