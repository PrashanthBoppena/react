import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

const FreeTrialSection = () => (
  <Paper sx={{ p: 2, backgroundColor: '#4CAF50', color: 'white', borderRadius: 2, height: '100%' }}>
    <Typography variant="h4" gutterBottom>
      Free 30-day trial
    </Typography>
    <Typography variant="body1" gutterBottom>
      After the trial, you can keep the same card and choose a new plan.
    </Typography>
    <Typography variant="body2" gutterBottom>
      Data: 1 GB, Voice: Unlimited, Text: 100 SMS
    </Typography>
    <Button variant="contained" sx={{ mt: 2, backgroundColor: 'white', color: '#4CAF50' }}>
      I Want To Try It
    </Button>
  </Paper>
);

export default FreeTrialSection;
