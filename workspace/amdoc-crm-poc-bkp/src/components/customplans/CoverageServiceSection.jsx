import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import bannerImg2 from '@/images/defaultBanner.jpg';
const CoverageServiceSection = () => {

  return (
    <Container sx={{ mt: 4, textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      
      <Grid container spacing={3}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom>
        Coverage & Service
      </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo nec purus auctor efficitur sed nec lectus. Nulla facilisi. Vestibulum eleifend orci nec dui consectetur, at ultrices lorem lobortis.
          </Typography>
          <Typography variant="body1">
            Pellentesque non purus non enim convallis facilisis id vel orci. Quisque eu purus odio. Sed dapibus arcu ac justo posuere, in iaculis ipsum tempor.
          </Typography>
        </Grid>
        {/* Right Content */}
        <Grid item xs={12} md={6}>
        <CardMedia
        component="img"
        image={bannerImg2}
        alt="Live from space album cover"
      />
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoverageServiceSection;
