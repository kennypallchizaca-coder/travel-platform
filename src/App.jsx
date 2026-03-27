import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import DestinationsPage from './pages/Destinations/DestinationsPage';
import HotelsPage from './pages/Hotels/HotelsPage';
import FlightsPage from './pages/Flights/FlightsPage';
import BookingsPage from './pages/Bookings/BookingsPage';
import RestaurantsPage from './pages/Restaurants/RestaurantsPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
