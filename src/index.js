import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import reportWebVitals from './reportWebVitals';


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  </Router>
);

reportWebVitals();