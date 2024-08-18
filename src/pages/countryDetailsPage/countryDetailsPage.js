import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CountryDetails from '../../components/countryDetails/countryDetails';
import Button from '@mui/material/Button';

export default function CountryDetailsPage() {
  const location = useLocation();
  const { country } = location.state;

  return (
    <div>
      <CountryDetails country={country} />
      <Button href="/">Back</Button>
    </div>
  );
}
