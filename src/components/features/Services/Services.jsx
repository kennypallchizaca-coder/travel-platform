import React from 'react';
import { FiMap, FiWind, FiHome, FiCompass } from 'react-icons/fi';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import './Services.css';

const defaultServices = [
  {
    id: 1,
    icon: <FiMap />,
    title: 'Expediciones Amazónicas',
    desc: 'Adéntrate en el corazón del Yasuní con guías indígenas y descubre la mayor biodiversidad del planeta.'
  },
  {
    id: 2,
    icon: <FiWind />,
    title: 'Cruceros en Galápagos',
    desc: 'Navega por el archipiélago de Colón en embarcaciones de lujo y observa especies únicas en su hábitat.'
  },
  {
    id: 3,
    icon: <FiHome />,
    title: 'Haciendas Coloniales',
    desc: 'Hospédate en históricas haciendas andinas rodeadas de volcanes y disfruta de la hospitalidad serrana.'
  },
  {
    id: 4,
    icon: <FiCompass />,
    title: 'Rutas de Aventura',
    desc: 'Desde el surf en Montañita hasta el andinismo en el Cotopaxi, diseñamos tu dosis perfecta de adrenalina.'
  }
];

const Services = ({ data, title, subtitle }) => {
  const servicesToDisplay = data || defaultServices;
  
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="animate-on-scroll is-visible">
          <SectionTitle 
            subtitle={subtitle || "Categorías"} 
            title={title || "Nuestros Mejores Servicios"} 
            alignment="center"
          />
        </div>
        
        <div className="services-grid">
          {servicesToDisplay.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card animate-on-scroll is-visible delay-${(index + 1) * 100}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
