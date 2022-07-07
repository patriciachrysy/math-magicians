import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import Quote from './Quote';
import Calculator from '../components/Calculator';

const Routing = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);
export default Routing;
