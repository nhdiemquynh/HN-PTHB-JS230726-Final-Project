import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages';
import DetailMovie from '../pages/detail.movie';
import Page404 from '../pages/404';

const RouterWeb = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/category/:id" element={<DetailMovie />} />
        <Route path="/*" element={<Page404 />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterWeb;
