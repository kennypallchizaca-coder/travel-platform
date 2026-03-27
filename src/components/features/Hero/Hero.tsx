import React from 'react';
import BookingWidget from '../BookingWidget/BookingWidget';
import Button from '../../common/Button/Button';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll fade-in-left">
          <span className="hero-subtitle">Los Mejores Destinos De Ecuador</span>
          <h1 className="hero-title">
            Viaja, disfruta y vive 
            <br />
            con <span>JuanitoTravel</span>
          </h1>
          <p className="hero-desc">
            Organizamos tus viajes con los mejores destinos en Galápagos, los Andes, la Costa y la Amazonía. Experimenta el Ecuador de manera inolvidable.
          </p>
          <div className="hero-actions">
            <Button size="lg" onClick={() => alert("Descubre más - Próximamente")}>Descubre más</Button>
            <button className="play-btn" onClick={() => alert("Video Promocional - Próximamente")}>
              <span className="play-icon">▶</span>
              Mirar Demo
            </button>
          </div>
        </div>
        <div className="hero-image animate-on-scroll fade-in-right scale-up delay-200">
          <img 
            src="/images/hero_ecuador.png"
            alt="Paisaje deslumbrante del cráter del Quilotoa en Ecuador" 
            className="main-img"
          />
          {/* Decorative Elements */}
          <div className="floating-card decor-1">
            <p className="card-lbl">Top Lugares</p>
            <p className="card-val">Galápagos</p>
          </div>
        </div>
      </div>
      <div className="widget-container animate-on-scroll scale-up delay-400">
        <BookingWidget />
      </div>
    </section>
  );
};

export default Hero;
