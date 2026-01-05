import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Booking from './pages/Booking.jsx';
import BookingSuccess from './pages/Bookingsuccess.jsx';
import MyBookings from './pages/MyBookings.jsx';
import AdminBooking from './pages/AdminBooking.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/admin" element={<AdminBooking />} />
      </Routes>
    </Router>
  );
}

export default App;