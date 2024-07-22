import { getCustomer } from "./ApiServices";
import React, { useContext,useState,useEffect }  from 'react';
import AuthContext from "./AuthContext";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
  Container,
} from '@mui/material';


const AddressInfo = () => {
  const { username, token, userData } = useContext(AuthContext);
  
  const [customerData, setCustomerData] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('customerInfo'); // Default category to display


  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log(`in address file custID ${userData.customerID}`)
        console.log(`in address file token ${token}`)
        const response = await getCustomer(userData.customerID,token); // Replace customerID and Token with actual values
        console.log(response.result[0])
        setCustomerData(response.result[0]);

        // Extract addressList and contactList from response and set them
        if (response.result && response.result.length > 0) {
          setAddressList(response.result[0].addressList || []);
          setContactList(response.result[0].contactList || []);
        }
      } catch (error) {
        console.error('Error fetching customer:', error);
        // Handle error state if needed
      }
    };

    fetchCustomerData();
  }, [userData.customerID, token]); // Empty dependency array means this effect runs once after initial render

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  if (!customerData) {
    return <div>Loading...</div>; // Render loading state while waiting for data
  }
  const {
    customerID,
    customerCode,
    customerType,
    firstName,
    lastName,
    fatherName,
    gender,
    dob,
    region,
    billFrequency,
  } = customerData;

  return (
    <Container maxWidth="md">


      <Box mt={2} />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            onClick={() => handleCategoryChange('customerInfo')}
            sx={{ cursor: 'pointer', backgroundColor: currentCategory === 'customerInfo' ? '#f0f0f0' : 'inherit' }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Customer Info
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            onClick={() => handleCategoryChange('address')}
            sx={{ cursor: 'pointer', backgroundColor: currentCategory === 'address' ? '#f0f0f0' : 'inherit' }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Address
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            onClick={() => handleCategoryChange('contact')}
            sx={{ cursor: 'pointer', backgroundColor: currentCategory === 'contact' ? '#f0f0f0' : 'inherit' }}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                Contact Info
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={2} />

      {currentCategory === 'customerInfo' && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Customer Information
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">
                Customer ID: {customerID}
                <br />
                Customer Code: {customerCode}
                <br />
                Customer Type: {customerType}
                <br />
                Name: {firstName} {lastName}
                <br />
                Father's Name: {fatherName}
                <br />
                Gender: {gender}
                <br />
                Date of Birth: {dob}
                <br />
                Region: {region}
                <br />
                Bill Frequency: {billFrequency}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}

      {currentCategory === 'address' && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Address
            </Typography>
            <Divider />
            {addressList && addressList.length > 0 ? (
              addressList.map((address, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1">
                    Address Line 1: {address.addressLine1 || 'N/A'}
                    <br />
                    Locality: {address.addressLocality || 'N/A'}
                    <br />
                    City: {address.addressCity || 'N/A'}
                    <br />
                    State: {address.addressState || 'N/A'}
                    <br />
                    Zipcode: {address.addressZipcode || 'N/A'}
                    <br />
                    Country: {address.addressCountry || 'N/A'}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1">No address found</Typography>
            )}
          </CardContent>
        </Card>
      )}

      {currentCategory === 'contact' && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Contact Information
            </Typography>
            <Divider />
            {contactList && contactList.length > 0 ? (
              contactList.map((contact, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1">
                    Primary Mobile: {contact.primaryMobile || 'N/A'}
                    <br />
                    Primary Email: {contact.primaryEmail || 'N/A'}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1">No contact information found</Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default AddressInfo;