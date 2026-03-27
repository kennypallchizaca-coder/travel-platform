import React from 'react';
import PageHeader from '../../components/common/PageHeader/PageHeader';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import Destinations from '../../components/features/Destinations/Destinations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SEO from '../../components/common/SEO/SEO';

interface Dish {
  id: number;
  region: string;
  dish: string;
  img: string;
  desc: string;
}

const regionalDishes: Dish[] = [
  {
    id: 1,
    region: 'Sierra',
    dish: 'Locro de Papa',
    img: '/images/andes.png',
    desc: 'Sopa cremosa de papas con queso y aguacate, un clásico reconfortante de los Andes.'
  },
  {
    id: 2,
    region: 'Costa',
    dish: 'Encebollado',
    img: '/images/coast.png',
    desc: 'El plato bandera de la costa: una sopa de atún con yuca, cebolla y mucho sabor marino.'
  },
  {
    id: 3,
    region: 'Amazonía',
    dish: 'Maito de Pescado',
    img: '/images/banos.png',
    desc: 'Pescado envuelto en hojas de bijao y cocinado a las brasas, una técnica ancestral.'
  }
];

const featuredRestaurants = [
  {
    id: 201,
    title: "Nuema",
    location: "Quito, Pichincha",
    price: "$$$$",
    tag: "World's 50 Best",
    img: "/images/restaurants.png"
  },
  {
    id: 202,
    title: "Mercado del Río",
    location: "Guayaquil, Guayas",
    price: "$$",
    tag: "Variedad",
    img: "/images/gastronomy.png"
  },
  {
    id: 203,
    title: "Zazu",
    location: "Quito, Pichincha",
    price: "$$$",
    tag: "Autor",
    img: "/images/quito.png"
  }
];

const RestaurantsPage: React.FC = () => {
  useScrollAnimation();
  return (
    <div className="restaurants-page">
      <SEO 
        title="Gastronomía Ecuatoriana" 
        description="Un viaje por los sabores de Ecuador. El mejor locro de papa, encebollado y maito. Guía de restaurantes premiados."
        keywords="gastronomia ecuador, platos tipicos, comida ecuatoriana, restaurantes quito, nuema"
      />
      <PageHeader 
        title="Sabores del Ecuador" 
        subtitle="Un viaje culinario por las cuatro regiones del país"
        backgroundImage="/images/restaurants.png"
      />
      <div className="container section-padding">
        <SectionTitle 
          subtitle="Experiencia Gastronómica" 
          title="Platos que no puedes dejar de probar" 
          alignment="center"
          nowrap={true}
        />
        
        <div className="dest-grid" style={{ margin: 'var(--spacing-xl) 0' }}>
          {regionalDishes.map((item, index) => (
            <div key={item.id} className={`dest-card animate-on-scroll delay-${(index + 1) * 100}`}>
              <div className="dest-img-wrapper" style={{ height: '200px' }}>
                <img 
                  src={item.img} 
                  alt={item.dish} 
                  className="dest-img" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="dest-content">
                <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem' }}>{item.region}</span>
                <h3 style={{ margin: '5px 0' }}>{item.dish}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
          <Destinations 
            data={featuredRestaurants}
            title="Restaurantes de Clase Mundial"
            subtitle="Alta Cocina"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
