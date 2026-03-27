import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';
import Button from '../../common/Button/Button';
import './BookingWidget.css';

const BookingWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights'>('hotels');

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    alert(`Buscando ${activeTab}... Funcionalidad a implementar.`);
  };

  return (
    <div className="booking-widget">
      <div className="widget-tabs">
        <button 
          className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          Hoteles
        </button>
        <button 
          className={`tab ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          Vuelos
        </button>
      </div>
      
      <form className="widget-form" onSubmit={handleSearch}>
        <div className="input-group">
          <label htmlFor="widget-destination">
            <FiMapPin className="input-icon" /> Destino
          </label>
          <input id="widget-destination" type="text" placeholder="Ej. Galápagos, Quito" required />
        </div>
        
        <div className="divider"></div>
        
        <div className="input-group">
          <label htmlFor="widget-date">
            <FiCalendar className="input-icon" /> Fecha
          </label>
          <input id="widget-date" type="date" required />
        </div>
        
        <div className="divider"></div>
        
        <div className="input-group">
          <label htmlFor="widget-persons">
            <FiUsers className="input-icon" /> Personas
          </label>
          <select id="widget-persons" required defaultValue="1">
            <option value="1">1 Persona</option>
            <option value="2">2 Personas</option>
            <option value="3">3 Personas</option>
            <option value="4">4+ Personas</option>
          </select>
        </div>
        
        <Button variant="primary" size="lg" type="submit" className="search-btn">
          Buscar
        </Button>
      </form>
    </div>
  );
};

export default BookingWidget;
