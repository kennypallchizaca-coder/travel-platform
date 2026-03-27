import React from 'react';
import Hero from '../../components/features/Hero/Hero';
import Services from '../../components/features/Services/Services';
import Destinations from '../../components/features/Destinations/Destinations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import './Home.css';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="home-page">
      <SEO
        title="Inicio"
        description="Descubre lo mejor de Ecuador con Juanito Travel. Tours personalizados a Galápagos, Andes, Amazonía y Costa desde Quito."
        keywords="viajes ecuador, turismo galapagos, tours quito, juanito travel"
      />

      <Hero />

      <Destinations
        subtitle="Explora Ecuador"
        title="Destinos Imperdibles"
      />

      <Services
        subtitle="Categorías de Viaje"
        title="Experiencias a tu Medida"
      />
    </div>
  );
};

export default Home;

