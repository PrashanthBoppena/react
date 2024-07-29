import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const UsageDetails = ({ usage }) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Usage Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1"><strong>Data Usage:</strong> {usage.dataUsage}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1"><strong>Voice Usage:</strong> {usage.voiceUsage}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1"><strong>SMS Usage:</strong> {usage.smsUsage}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UsageDetails;
