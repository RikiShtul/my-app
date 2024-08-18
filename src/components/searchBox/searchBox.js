import React from 'react';
import { TextField, Button } from '@mui/material';

export default function SearchBox({ searchTerm, onSearchChange, onSearch }) {
  return (
    <div>
      <TextField
        variant="outlined"
        label="Search for a country..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <br/>
      <Button variant="contained" color="primary" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}