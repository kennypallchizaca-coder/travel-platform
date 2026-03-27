import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import './Auth.css';

const Login = () => {
  useScrollAnimation();
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
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-input-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tu@correo.com" />
          </div>
          <div className="auth-input-group">
            <label>Contraseña</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <Link to="#" className="forgot-password">¿Olvidaste tu contraseña?</Link>
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
