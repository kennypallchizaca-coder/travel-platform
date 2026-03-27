import React from 'react';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import Destinations from '../../components/features/Destinations/Destinations';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import '../../components/features/Services/Services.css';

interface RegionDestination {
  id: number;
  title: string;
  location: string;
  price: string;
  days: string;
  img: string;
}

const regionDestinations: RegionDestination[] = [
  {
    id: 101,
    title: "Islas Galápagos",
    location: "Archipiélago de Colón",
    price: "Tour Completo",
    days: "7 Días",
    img: "/images/galapagos.png"
  },
  {
    id: 102,
    title: "Centro Histórico",
    location: "Quito, Pichincha",
    price: "City Tour",
    days: "1 Día",
    img: "/images/quito.png"
  },
  {
    id: 103,
    title: "Baños de Agua Santa",
    location: "Tungurahua",
    price: "Aventura",
    days: "2 Días",
    img: "/images/banos.png"
  }
];

const DestinationsPage: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="destinations-page">
      <SEO 
        title="Destinos en Ecuador" 
        description="Explora las cuatro regiones de Ecuador: la magia de Galápagos, la aventura en los Andes, el misterio del Amazonas y la paz del Pacífico."
        keywords="destinos ecuador, galapagos tours, cotopaxi aventura, yasuni amazonia"
      />
      <PageHeader 
        title="Explora lo Mejor de Ecuador" 
        subtitle="Desde las profundidades del Amazonas hasta las cumbres de los Andes"
        backgroundImage="/images/hero_ecuador.png"
      />
      <div className="container section-padding">
        <Destinations 
          data={regionDestinations} 
          title="Nuestros Destinos Recomendados"
          subtitle="Selección Exclusiva"
        />
        
        <div style={{ marginTop: 'var(--spacing-3xl)', borderTop: '1px solid var(--gray-200)', paddingTop: 'var(--spacing-3xl)' }}>
          <SectionTitle 
            subtitle="¿Por qué nosotros?" 
            title="Tu seguridad es nuestra prioridad" 
            alignment="center"
          />
          <div className="services-grid" style={{ marginTop: 'var(--spacing-xl)' }}>
            <div className="service-card animate-on-scroll">
              <h3 className="service-title">Guías Certificados</h3>
              <p className="service-desc">Trabajamos únicamente con profesionales autorizados por el Ministerio de Turismo.</p>
            </div>
            <div className="service-card animate-on-scroll delay-100">
              <h3 className="service-title">Flexibilidad Total</h3>
              <p className="service-desc">Cambia tus fechas o cancela hasta con 48 horas de anticipación sin cargos ocultos.</p>
            </div>
            <div className="service-card animate-on-scroll delay-200">
              <h3 className="service-title">Soporte 24/7</h3>
              <p className="service-desc">Estamos contigo en cada paso de tu viaje, desde la planificación hasta el regreso.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
