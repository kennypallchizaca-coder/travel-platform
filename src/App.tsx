import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home/Home'));
const DestinationsPage = lazy(() => import('./pages/Destinations/DestinationsPage'));
const HotelsPage = lazy(() => import('./pages/Hotels/HotelsPage'));
const FlightsPage = lazy(() => import('./pages/Flights/FlightsPage'));
const BookingsPage = lazy(() => import('./pages/Bookings/BookingsPage'));
const RestaurantsPage = lazy(() => import('./pages/Restaurants/RestaurantsPage'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    height: '60vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'var(--primary)',
    fontWeight: '600'
  }}>
    Cargando aventura...
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="flights" element={<FlightsPage />} />
            <Route path="restaurants" element={<RestaurantsPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
