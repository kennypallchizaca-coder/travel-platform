import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Juanito Travel Logo" className="logo-img" />
          <span>Juanito</span>Travel
        </Link>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinos</Link></li>
            <li><Link to="/hotels" onClick={() => setIsMobileMenuOpen(false)}>Hoteles</Link></li>
            <li><Link to="/flights" onClick={() => setIsMobileMenuOpen(false)}>Vuelos</Link></li>
            <li><Link to="/restaurants" onClick={() => setIsMobileMenuOpen(false)}>Restaurantes</Link></li>
            <li><Link to="/bookings" onClick={() => setIsMobileMenuOpen(false)}>Reservas</Link></li>
          </ul>
          
          <div className="auth-buttons">
            <Link to="/login" className="btn-login" onClick={() => setIsMobileMenuOpen(false)}>Ingresar</Link>
            <Link to="/register" className="btn-signup" onClick={() => setIsMobileMenuOpen(false)}>Regístrate</Link>
          </div>
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
