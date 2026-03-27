import React from 'react';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import BookingWidget from '../../components/features/BookingWidget/BookingWidget';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';

interface Hotel {
  id: number;
  name: string;
  location: string;
  type: string;
  img: string;
  desc: string;
}

const hotelsData: Hotel[] = [
  {
    id: 1,
    name: 'Hacienda Zuleta',
    location: 'Imbabura',
    type: 'Histórica / Lujo',
    img: '/images/zuleta.png',
    desc: 'Una de las haciendas más bellas del Ecuador, conocida por su hospitalidad y quesos artesanales.'
  },
  {
    id: 2,
    name: 'Mashpi Lodge',
    location: 'Chocó Andino',
    type: 'Eco-Luxury',
    img: '/images/mashpi.png',
    desc: 'Vive el bosque nublado desde las alturas en este hotel de diseño sostenible y vistas espectaculares.'
  },
  {
    id: 3,
    name: 'Finch Bay Hotel',
    location: 'Puerto Ayora, Galápagos',
    type: 'Boutique / Playa',
    img: '/images/galapagos.png',
    desc: 'Un oasis de paz y lujo ecológico en la Isla Santa Cruz, con acceso directo a la playa.'
  }
];

const HotelsPage: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="hotels-page">
      <SEO 
        title="Hoteles y Haciendas" 
        description="Hospédate en las mejores haciendas coloniales, eco-lodges de lujo y hoteles boutique en todo el Ecuador."
        keywords="hoteles ecuador, haciendas lujo, eco lodges, boutique hotels quito"
      />
      <PageHeader 
        title="Encuentra tu Hotel Ideal" 
        subtitle="Hospedaje de primera clase en Ecuador"
        backgroundImage="/images/andes.png"
      />
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <SectionTitle 
          subtitle="Mejor Selección" 
          title="Nuestras Recomendaciones Exclusivas" 
          alignment="center"
        />
        
        <div className="dest-grid" style={{ margin: 'var(--spacing-xl) 0' }}>
          {hotelsData.map((hotel) => (
            <div key={hotel.id} className="dest-card">
              <div className="dest-img-wrapper">
                <img 
                  src={hotel.img} 
                  alt={hotel.name} 
                  className="dest-img" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="dest-content">
                <div className="dest-header">
                  <h3 className="dest-title">{hotel.name}</h3>
                  <span className="dest-tag" style={{ 
                    fontSize: '0.75rem', 
                    padding: '2px 8px', 
                    backgroundColor: 'rgba(255, 112, 41, 0.1)', 
                    color: 'var(--primary)', 
                    borderRadius: '4px' 
                  }}>{hotel.type}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', margin: '10px 0' }}>{hotel.desc}</p>
                <div className="dest-info">
                  <span className="dest-location">{hotel.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--spacing-2xl)', borderTop: '1px solid var(--gray-200)', paddingTop: 'var(--spacing-2xl)' }}>
          <SectionTitle 
              subtitle="Buscador" 
              title="¿Ya tienes un destino en mente?" 
              alignment="center"
          />
          <div style={{ marginTop: 'var(--spacing-xl)' }}>
            <BookingWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
