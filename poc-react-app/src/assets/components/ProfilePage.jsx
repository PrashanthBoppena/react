import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Container, Card, CardContent, Typography } from '@mui/material';

function ProfilePage() {
  const { username, token, userData } = useContext(AuthContext);
  console.log(`username in profile page ${username}`)  
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      {userData && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Customer ID: {userData.customerID}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contact: {userData.contact}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email ID: {userData.email}
            </Typography>     
                             
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default ProfilePage;
