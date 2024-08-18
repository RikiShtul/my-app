import React, { useState, useEffect } from 'react';
import CountryList from '../../components/countryList/countryList';
import SearchBox from '../../components/searchBox/searchBox';
import { GetCountries } from '../../services/countriesService';

import { useNavigate } from 'react-router-dom';
import CountryDetails from '../../components/countryDetails/countryDetails';
import { CircularProgress, Box } from '@mui/material';


function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    GetCountries().then(c => {
      setCountries(c);
      setLoading(false);
    });
  }, []);

  const handleCountrySelect = (countryName) => {
    const selectedCountry = countries.find((c) => c.name === countryName);
    navigate('/country-details',{state: { country: selectedCountry }});
  };

  const handleSearch = () => {
    const selectedCountry = countries.find((c) => c.name.toLowerCase() === searchTerm.toLowerCase());
    setCountry(selectedCountry);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <h1>Countries</h1>
      <CountryList countries={countries} onSelectCountry={handleCountrySelect} />
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} onSearch={handleSearch} />
      <CountryDetails country={country} showCurrency={false}/>
    </div>
  );
}

export default HomePage;
