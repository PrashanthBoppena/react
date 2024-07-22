import React from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

const SentEmailOfferLinkSection = () => {
  const handleSignUp = () => {
    // Logic to send email link would go here
    // Example: You can use an API call or a mock function to send the email link
    console.log('Sending email link...');
  };

  return (
    <Container sx={{ mt: 4, backgroundColor: '#f3f3f3', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>
        Sign up with us for the freshest offers sent straight to your email.
      </Typography>
      <TextField
        label="Enter your email address here"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '1rem' }}
        onClick={handleSignUp}
      >
        Sign up
      </Button>
      {/* Add Terms & Conditions Text here */}
    </Container>
  );
};

export default SentEmailOfferLinkSection;
