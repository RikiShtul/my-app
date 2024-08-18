import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function CountryList({ countries, onSelectCountry }) {
  return (
        <FormControl variant="outlined" style={{ width:'120px', marginBottom: '20px' }}>
        <InputLabel>Country</InputLabel>
        <Select onChange={(e) => onSelectCountry(e.target.value)} label="Country">
          {countries.map(country => (
            <MenuItem key={country.name} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
