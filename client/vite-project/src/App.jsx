import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
