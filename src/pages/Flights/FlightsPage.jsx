import React from 'react';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import BookingWidget from '../../components/features/BookingWidget/BookingWidget';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';

const flightRoutes = [
  {
    id: 1,
    route: 'Quito - Galápagos (Baltra)',
    duration: '2h 10m',
    airline: 'LATAM / Avianca',
    price: 'Desde $180'
  },
  {
    id: 2,
    route: 'Guayaquil - Cuenca',
    duration: '45m',
    airline: 'LATAM',
    price: 'Desde $65'
  },
  {
    id: 3,
    route: 'Quito - Manta',
    duration: '50m',
    airline: 'Avianca / Aeroregional',
    price: 'Desde $75'
  }
];

const FlightsPage = () => {
  useScrollAnimation();
  return (
    <div className="flights-page">
      <SEO 
        title="Vuelos Nacionales" 
        description="Reserva tus vuelos internos en Ecuador con tarifas exclusivas. Conexiones rápidas a Baltra, Cuenca, Manta y Guayaquil."
        keywords="vuelos nacionales ecuador, boletos aéreos, vuelos galápagos, aerotransporte ecuador"
      />
      <PageHeader 
        title="Vuela sobre los Andes" 
        subtitle="Conexiones rápidas hacia los rincones más bellos de Ecuador"
        backgroundImage="/images/coast.png" 
      />
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <SectionTitle 
          subtitle="Rutas Populares" 
          title="Vuelos Internos Destacados" 
          center={true}
        />
        
        <div className="dest-grid" style={{ margin: 'var(--spacing-xl) 0' }}>
          {flightRoutes.map((flight) => (
            <div key={flight.id} className="dest-card" style={{ padding: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>{flight.route}</h3>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{flight.price}</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <span><strong>Duración:</strong> {flight.duration}</span>
                <span><strong>Aerolíneas:</strong> {flight.airline}</span>
              </div>
              <button className="btn-primary" style={{ marginTop: '15px', width: '100%', padding: '8px', fontSize: '0.9rem' }}>Ver Disponibilidad</button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--spacing-2xl)', borderTop: '1px solid var(--gray-200)', paddingTop: 'var(--spacing-2xl)' }}>
          <SectionTitle 
            subtitle="Buscador" 
            title="Reserva tu Próximo Vuelo" 
            center={true}
          />
          <div style={{ marginTop: 'var(--spacing-xl)' }}>
            <BookingWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
