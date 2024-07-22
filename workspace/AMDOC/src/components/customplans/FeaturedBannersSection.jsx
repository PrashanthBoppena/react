import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button ,CardMedia} from '@mui/material';
import bannerImg2 from '@/images/defaultBanner.jpg';
const FeaturedBanners = () => {

  const bannerData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/200',
      title: 'Banner 1',
      subtitle: 'Subtitle for Banner 1',
      buttonLabel: 'View Details',
      backgroundColor: '#ffcdd2' // Light Red
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200',
      title: 'Banner 2',
      subtitle: 'Subtitle for Banner 2',
      buttonLabel: 'View Details',
      backgroundColor: '#bbdefb' // Light Blue
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200',
      title: 'Banner 3',
      subtitle: 'Subtitle for Banner 3',
      buttonLabel: 'View Details',
      backgroundColor: '#c8e6c9' // Light Green
    }
    // Add more banners as needed
  ];

  return (
    <Container sx={{ mt: 4, textAlign: 'center' ,backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>
        Featured Banners
      </Typography>
      <Grid container spacing={3}>
        {bannerData.map((banner) => (
          <Grid item key={banner.id} xs={12} sm={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: banner.backgroundColor }}>
            <CardMedia
        component="img"
        image={bannerImg2}
        alt="Live from space album cover"
      />
              <CardContent style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem' }}>
                <Typography variant="h6" gutterBottom>
                  {banner.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {banner.subtitle}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                  {banner.buttonLabel}
                </Button>
              </CardContent>
             </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedBanners;
