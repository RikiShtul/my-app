import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import CountryDetailsPage from './pages/countryDetailsPage/countryDetailsPage';

export default function App() {
    return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/country-details" element={<CountryDetailsPage />} />
            </Routes>
          </div>
        </Router>
    )
}
