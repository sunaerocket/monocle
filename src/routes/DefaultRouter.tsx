import React from 'react';
import { Routes, Route } from 'react-router-dom';

function DefaultRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>Main Page</h1>} />
      <Route path="/issues" element={<h1>Issue Page</h1>} />
    </Routes>
  );
}

export default DefaultRouter;
