import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import './Auth.css';

const Login: React.FC = () => {
  useScrollAnimation();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      <SEO 
        title="Iniciar Sesión" 
        description="Ingresa a tu cuenta de Juanito Travel para gestionar tus viajes y acceder a ofertas exclusivas."
        keywords="login juanito travel, iniciar sesion, viajes ecuador"
      />
      <div className="auth-container animate-on-scroll">
        <h2 className="auth-title">Bienvenido a JuanitoTravel</h2>
        <p className="auth-subtitle">Ingresa para gestionar tus próximas aventuras por el Ecuador</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label htmlFor="login-email">Correo Electrónico</label>
            <input id="login-email" type="email" placeholder="tu@correo.com" required />
          </div>
          <div className="auth-input-group">
            <label htmlFor="login-password">Contraseña</label>
            <input id="login-password" type="password" placeholder="********" required />
          </div>
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" id="remember-me" /> Recordarme
            </label>
            <Link to="/forgot-password" title="Forgot Password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>
          <Button variant="primary" type="submit" size="lg" className="auth-submit">Iniciar Sesión</Button>
        </form>
        
        <p className="auth-footer">
          ¿No tienes una cuenta? <Link to="/register">Regístrate gratis</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
