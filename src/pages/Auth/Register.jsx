import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import './Auth.css';

const Register = () => {
  useScrollAnimation();
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
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-input-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Juan Pérez" />
          </div>
          <div className="auth-input-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tu@correo.com" />
          </div>
          <div className="auth-input-group">
            <label>Contraseña</label>
            <input type="password" placeholder="********" />
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
