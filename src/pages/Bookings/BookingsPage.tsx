import React from 'react';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';
import '../../components/features/Services/Services.css';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';

const BookingsPage: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="bookings-page">
      <SEO 
        title="Mis Reservas" 
        description="Gestiona tus viajes, consulta tus itinerarios y prepárate para tu próxima aventura con Juanito Travel."
        keywords="reservas viajes, itinerario ecuador, mis tickets, juanito travel"
      />
      <PageHeader 
        title="Mis Reservas" 
        subtitle="Gestiona tus viajes y descubre nuevas aventuras"
        backgroundImage="/images/banos.png"
      />
      <div className="container section-padding">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <SectionTitle 
            subtitle="Historial" 
            title="Aún no tienes reservas" 
            alignment="center"
          />
          <p style={{ marginTop: 'var(--spacing-md)', color: 'var(--text-main)', fontSize: '1.2rem', maxWidth: '700px', marginInline: 'auto' }}>
            Cuando comiences a planear tus aventuras con JuanitoTravel, aquí aparecerán todos tus itinerarios, tickets y facturas. ¡Tu próximo destino te espera!
          </p>
        </div>

        <div className="booking-guide-section bg-light" style={{ 
          marginTop: 'var(--spacing-3xl)', 
          borderTop: '1px solid var(--gray-200)', 
          paddingTop: 'var(--spacing-3xl)',
          paddingBottom: 'var(--spacing-3xl)',
          position: 'relative'
        }}>
          <div className="animate-on-scroll">
            <SectionTitle 
              subtitle="Guía Paso a Paso" 
              title="¿Cómo reservar tu próximo viaje?" 
              alignment="center"
              nowrap={true}
            />
          </div>
          
          <div className="services-grid" style={{ marginTop: 'var(--spacing-3xl)' }}>
            <div className="service-card animate-on-scroll delay-100">
              <div style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                <img 
                  src={step1} 
                  alt="Elige tu destino" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="service-title">01. Elige tu destino</h3>
              <p className="service-desc">Explora nuestras secciones de Galápagos, Costa, Sierra o Amazonía y encuentra tu lugar ideal.</p>
            </div>
            
            <div className="service-card animate-on-scroll delay-200">
              <div style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                <img 
                  src={step2} 
                  alt="Personaliza" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="service-title">02. Personaliza</h3>
              <p className="service-desc">Selecciona las fechas, el tipo de hotel y las actividades que más te emocionen. Diseñamos para ti.</p>
            </div>
            
            <div className="service-card animate-on-scroll delay-300">
              <div style={{ width: '150px', height: '150px', margin: '0 auto var(--spacing-lg)', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                <img 
                  src={step3} 
                  alt="Confirma" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="service-title">03. Confirma y Disfruta</h3>
              <p className="service-desc">Realiza tu pago de forma segura y recibe tus vouchers directamente en tu correo electrónico.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
