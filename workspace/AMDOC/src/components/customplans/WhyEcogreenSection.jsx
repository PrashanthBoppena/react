import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FlightIcon from '@mui/icons-material/Flight';
import ComputerIcon from '@mui/icons-material/Computer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; 

const WhyEcogreenSection = () => (
  <Container sx={{ mt: 4, backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
    <Typography variant="h4" gutterBottom align="center">
      Why Ecogreen?
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="center">
      Ecogreen is the best Digital Brand experience.
    </Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ textAlign: 'center' }}>
          <ThumbUpIcon fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Simple and Quick Activation
          </Typography>
          <Typography variant="body2" gutterBottom>
            Only 3 steps to Activate:
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. Select an offer
          </Typography>
          <Typography variant="body2" gutterBottom>
            2. Free SIM or eSIM
          </Typography>
          <Typography variant="body2" gutterBottom>
            3. Pay and you are ready
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ textAlign: 'center' }}>
          <MonetizationOnIcon fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Pay for the offer you select
          </Typography>
          <Typography variant="body2" gutterBottom>
          you will benefit from:
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. No confusing plans
          </Typography>
          <Typography variant="body2" gutterBottom>
            2. No additional usage costs
          </Typography>
          <Typography variant="body2" gutterBottom>
            3. No commitment
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ textAlign: 'center' }}>
          <FlightIcon fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Big savings on flight tickets
          </Typography>
          <Typography variant="body2" gutterBottom>
            Enjoy exclusive client discounts on flight tickets!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ textAlign: 'center' }}>
          <ComputerIcon fontSize="large" />
          <Typography variant="h6" gutterBottom>
            Quality is our Service
          </Typography>
          <Typography variant="body2" gutterBottom>
            If for any reason you need help, contact us to help you quickly and efficiently.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default WhyEcogreenSection;
