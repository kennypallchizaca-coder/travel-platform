import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import './Destinations.css';

const defaultDestinations = [
  {
    id: 1,
    title: 'Laguna del Quilotoa',
    location: 'Pujilí, Cotopaxi',
    price: '$85',
    days: '1 Día Tour',
    img: '/images/quilotoa.png'
  },
  {
    id: 2,
    title: 'Parque Nacional Yasuní',
    location: 'Orellana, Amazonía',
    price: '$750',
    days: '4 Días Viaje',
    img: '/images/yasuni.png' 
  },
  {
    id: 3,
    title: 'Isla Bartolomé',
    location: 'Galápagos',
    price: '$280',
    days: '1 Día Tour',
    img: '/images/bartolome.png' 
  }
];

const Destinations = ({ data, title, subtitle }) => {
  const destinationsToDisplay = data || defaultDestinations;
  
  return (
    <section className="destinations section-padding">
      <div className="container">
        <div className="animate-on-scroll is-visible">
          <SectionTitle 
            subtitle={subtitle || "Top Destinos"} 
            title={title || "Explora lo mejor de Ecuador"} 
            alignment="center"
          />
        </div>
        
        <div className="dest-grid">
          {destinationsToDisplay.map((dest, index) => (
            <div 
              key={dest.id} 
              className={`dest-card animate-on-scroll is-visible delay-${(index + 1) * 100}`}
            >
              <div className="dest-img-wrapper">
                <img src={dest.img} alt={dest.title} className="dest-img" />
              </div>
              <div className="dest-content">
                <div className="dest-header">
                  <h3 className="dest-title">{dest.title}</h3>
                  <span className="dest-price">{dest.price}</span>
                </div>
                <div className="dest-info">
                  <span className="dest-location"><FiMapPin className="dest-icon" /> {dest.location}</span>
                  <span className="dest-days"><FiClock className="dest-icon" /> {dest.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
