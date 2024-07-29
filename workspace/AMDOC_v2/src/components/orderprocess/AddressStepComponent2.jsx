import React, { useState, useEffect } from 'react';
import {
  Box, Button, Card, CardContent, Checkbox, FormControlLabel,
  Grid, TextField, Typography, FormControl, Radio, RadioGroup
} from '@mui/material';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const storeLocations = [
  { name: 'Store 1', address: '123 Main St, Los Angeles, CA', img: 'https://via.placeholder.com/150', lat: 34.0522, lng: -118.2437 },
  { name: 'Store 2', address: '456 Market St, Los Angeles, CA', img: 'https://via.placeholder.com/150', lat: 34.0522, lng: -118.2437 },
  { name: 'Store 3', address: '789 Broadway, Los Angeles, CA', img: 'https://via.placeholder.com/150', lat: 34.0522, lng: -118.2437 },
  { name: 'Store 4', address: '101 Center St, Los Angeles, CA', img: 'https://via.placeholder.com/150', lat: 34.0522, lng: -118.2437 },
];
const AddressStepComponent = ({ onValidation, onAddressChange }) => {
  const initialAddress = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'United States'
  };

  const [billingAddress, setBillingAddress] = useState({ ...initialAddress });
  const [deliveryAddress, setDeliveryAddress] = useState({ ...initialAddress });
  const [useBillingAddress, setUseBillingAddress] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState('');
  const [selectedStore, setSelectedStore] = useState(null);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress({ ...deliveryAddress, [name]: value });
  };

  const handleUseBillingAddressChange = (e) => {
    e.preventDefault()
    const isChecked = e.target.checked;
    setUseBillingAddress(isChecked);

    if (isChecked) {
      setDeliveryAddress({ ...billingAddress });
    } else {
      setDeliveryAddress({ ...initialAddress });
    }
  };

  const isFormValid = () => {
    // Check if any required field is empty
    // return (
    //   billingAddress.addressLine1.trim() !== '' &&
    //   billingAddress.city.trim() !== '' &&
    //   billingAddress.province.trim() !== '' &&
    //   billingAddress.postalCode.trim() !== '' &&
    //   deliveryAddress.addressLine1.trim() !== '' &&
    //   deliveryAddress.city.trim() !== '' &&
    //   deliveryAddress.province.trim() !== '' &&
    //   deliveryAddress.postalCode.trim() !== ''
    // );
    return (
      true
    )
  };


  // Notify parent component about validation status and pass data by callback functions
  useEffect(() => {
    const valid = isFormValid();
    onValidation(valid);
    if (valid) {
      onAddressChange({

        billingAddress,
        deliveryAddress,




      });
    }
  }, [billingAddress, deliveryAddress]);
  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
        <CardContent>
          <Typography variant="h5">1. Inform us your billing info</Typography>
          <TextField
            required
            label="Address Line 1"
            name="addressLine1"
            value={billingAddress.addressLine1}
            onChange={handleBillingChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address Line 2"
            name="addressLine2"
            value={billingAddress.addressLine2}
            onChange={handleBillingChange}
            fullWidth
            margin="normal"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                label="City"
                name="city"
                value={billingAddress.city}
                onChange={handleBillingChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                label="Province"
                name="province"
                value={billingAddress.province}
                onChange={handleBillingChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                label="Postal Code"
                name="postalCode"
                value={billingAddress.postalCode}
                onChange={handleBillingChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                label="Country"
                name="country"
                value={billingAddress.country}
                onChange={handleBillingChange}
                fullWidth
                margin="normal"
                disabled
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
        <CardContent>
          <Typography variant="h5">2. How do you want to get your SIM?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="deliveryOption"
                  value={deliveryOption}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                >
                  <FormControlLabel value="store" control={<Radio />} label="Pick it up in a store" />
                  <FormControlLabel value="delivery" control={<Radio />} label="Delivered to you" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={8}>
              {deliveryOption === 'delivery' && (
                <Box>
                  <Typography variant="h5">Delivery Address</Typography>
                  <FormControlLabel
                    control={<Checkbox checked={useBillingAddress} onChange={handleUseBillingAddressChange} />}
                    label="Same address as billing"
                  />
                  <TextField
                    label="Address Line 1"
                    name="addressLine1"
                    value={deliveryAddress.addressLine1}
                    onChange={handleDeliveryChange}
                    fullWidth
                    margin="normal"
                    disabled={useBillingAddress}
                  />
                  <TextField
                    label="Address Line 2"
                    name="addressLine2"
                    value={deliveryAddress.addressLine2}
                    onChange={handleDeliveryChange}
                    fullWidth
                    margin="normal"
                    disabled={useBillingAddress}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="City"
                        name="city"
                        value={deliveryAddress.city}
                        onChange={handleDeliveryChange}
                        fullWidth
                        margin="normal"
                        disabled={useBillingAddress}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Province"
                        name="province"
                        value={deliveryAddress.province}
                        onChange={handleDeliveryChange}
                        fullWidth
                        margin="normal"
                        disabled={useBillingAddress}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Postal Code"
                        name="postalCode"
                        value={deliveryAddress.postalCode}
                        onChange={handleDeliveryChange}
                        fullWidth
                        margin="normal"
                        disabled={useBillingAddress}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Country"
                        name="country"
                        value={deliveryAddress.country}
                        onChange={handleDeliveryChange}
                        fullWidth
                        margin="normal"
                        disabled
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}

              {deliveryOption === 'store' && (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    {storeLocations.map((store, index) => (
                      <Card
                        key={index}
                        variant="outlined"
                        sx={{ marginBottom: 2, cursor: 'pointer' }}
                        onClick={() => handleStoreSelect(store)}
                      >
                        <CardContent>
                          <Typography variant="h6">{store.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {store.address}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {selectedStore && (
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h6">{selectedStore.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {selectedStore.address}
                          </Typography>
                          <Box sx={{ height: 300, marginTop: 2 }}>
                            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                              <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                                zoom={15}
                              >
                                {/* Add your map markers and other components here */}
                              </GoogleMap>
                            </LoadScript>
                          </Box>
                        </CardContent>
                      </Card>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Box>
  );
};

export default AddressStepComponent;
