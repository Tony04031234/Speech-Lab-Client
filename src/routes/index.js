import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Voice from '../pages/Voice';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/voice" element={<Voice />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AllRoutes;
 