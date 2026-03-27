import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Juanito Travel Logo" className="footer-logo-img" />
            <span>Juanito</span>Travel
          </Link>
          <p className="footer-desc">
            Reserva tu viaje ideal a lo largo del Ecuador y disfruta de la belleza de los Andes, Costa, Amazonía y Galápagos.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Compañía</h3>
            <ul>
              <li><Link to="/about">Acerca de nosotros</Link></li>
              <li><Link to="/careers">Trabaja con nosotros</Link></li>
              <li><Link to="/blog">Blog de Viajes</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li><Link to="/support">Soporte/Ayuda</Link></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
              <li><Link to="/affiliates">Afiliados</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Más</h3>
            <ul>
              <li><Link to="/terms">Términos de Servicio</Link></li>
              <li><Link to="/privacy">Política de Privacidad</Link></li>
              <li><Link to="/guidelines">Guias de Viaje</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>Todos los derechos reservados © {new Date().getFullYear()} JuanitoTravel</p>
      </div>
    </footer>
  );
};

export default Footer;
