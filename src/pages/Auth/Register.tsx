import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import './Auth.css';

const Register: React.FC = () => {
  useScrollAnimation();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      <SEO 
        title="Registrarse" 
        description="Crea tu cuenta en Juanito Travel y empieza a planificar tu viaje soñado por las cuatro regiones del Ecuador."
        keywords="registro juanito travel, crear cuenta, turismo ecuador"
      />
      <div className="auth-container animate-on-scroll">
        <h2 className="auth-title">Únete a la Aventura</h2>
        <p className="auth-subtitle">Crea tu cuenta en JuanitoTravel y planifica tu viaje ideal por Ecuador</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label htmlFor="reg-name">Nombre Completo</label>
            <input id="reg-name" type="text" placeholder="Juan Pérez" required />
          </div>
          <div className="auth-input-group">
            <label htmlFor="reg-email">Correo Electrónico</label>
            <input id="reg-email" type="email" placeholder="tu@correo.com" required />
          </div>
          <div className="auth-input-group">
            <label htmlFor="reg-password">Contraseña</label>
            <input id="reg-password" type="password" placeholder="********" required />
          </div>
          <p className="terms">Al registrarte, aceptas nuestros términos y condiciones.</p>
          <Button variant="primary" type="submit" size="lg" className="auth-submit">Crear Cuenta</Button>
        </form>
        
        <p className="auth-footer">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
