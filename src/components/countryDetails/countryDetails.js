import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import React from 'react';

function CountryDetails({ country,showCurrency=true}) {
  if (!country) return <div></div>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography color="textSecondary">
            Capital: {country.capital}
          </Typography>
          <CardMedia
            component="img"
            image={country.flag}
            alt={`Flag of ${country.name}`}
          />
          {showCurrency && (
          <Typography variant="body">
            Currency: {country.currencies.map(currency => currency.name).join(', ')}
          </Typography>)}
        </CardContent>
      </Card>
    </div>
  );
}

export default CountryDetails;
