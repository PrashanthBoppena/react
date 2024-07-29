import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const CustomisedPlanSection = () => (
  <Paper sx={{ p: 2, backgroundColor: '#FFEB3B', borderRadius: 2, height: '100%' }}>
    <Typography variant="h4" gutterBottom>
      Customised Plan
    </Typography>
    <Typography variant="body1" gutterBottom>
      Ecogreen with a new personalised plan that meets your needs
    </Typography>
    <Button variant="contained" sx={{ mt: 2 }}>
      Build Your Own Plan
    </Button>
  </Paper>
);

export default CustomisedPlanSection;
