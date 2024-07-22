import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Box, Container } from '@mui/material';
import { getCustomerAccounts } from './ApiServices';
import AuthContext from './AuthContext';

const MyServices = () => {
  const { token, userData } = useContext(AuthContext);

  const [customerOptedServices, setCustomerOptedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await getCustomerAccounts(userData.customerID, token);
        console.log('API Response:', response); // Debug: Log the entire API response

        if (response.statusCode === '200' && response.statusMessage === 'Success') {
          setCustomerOptedServices(response.result);
        } else {
          setError(response.statusMessage || 'Unknown error');
        }
      } catch (error) {
        console.error('Error fetching customer opted services:', error);
        setError(error.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, [userData.customerID, token]);

  if (loading) {
    return <div>Loading...</div>; // Render loading state while waiting for data
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error state if there's an issue fetching data
  }

  // Function to group services by customerAccountName
  const groupServicesByAccountName = () => {
    const groupedServices = {};
    customerOptedServices.forEach(service => {
      const { customerAccountName } = service;
      if (!groupedServices[customerAccountName]) {
        groupedServices[customerAccountName] = [];
      }
      groupedServices[customerAccountName].push(service);
    });
    return groupedServices;
  };

  const groupedServices = groupServicesByAccountName();

  return (
    <Container maxWidth="md">
      <Box mt={2} />
      {Object.keys(groupedServices).map((accountName, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {accountName}
                </Typography>
                <Divider />
                {groupedServices[accountName].map((service, idx) => (
                  <Box key={idx} mt={2}>
                    <Typography variant="body1">
                      Service Name: {service.custName || 'N/A'}
                      <br />
                      Account ID: {service.customerAccountID || 'N/A'}
                      <br />
                      Account Type: {service.customerAccountType || 'N/A'}
                      <br />
                      Billing Account ID: {service.billingAccountID || 'N/A'}
                      <br />
                      Balance Day: {service.balDay || 'N/A'}
                      <br />
                      Remaining Balance: {service.remainingBalance || 'N/A'}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default MyServices;
