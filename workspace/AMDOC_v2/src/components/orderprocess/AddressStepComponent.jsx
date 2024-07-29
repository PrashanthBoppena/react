import React, { useState, useEffect } from 'react';
import {
    Box, Button, Card, CardContent, Checkbox, FormControlLabel,
    Grid, TextField, Typography
} from '@mui/material';

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
        return (
            billingAddress.addressLine1.trim() !== '' &&
            billingAddress.city.trim() !== '' &&
            billingAddress.province.trim() !== '' &&
            billingAddress.postalCode.trim() !== '' &&
            deliveryAddress.addressLine1.trim() !== '' &&
            deliveryAddress.city.trim() !== '' &&
            deliveryAddress.province.trim() !== '' &&
            deliveryAddress.postalCode.trim() !== ''
        );
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


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* Billing Address */}
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
                        <CardContent>
                            <Typography variant="h5">Billing Address</Typography>
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
                            <TextField
                                required
                                label="City"
                                name="city"
                                value={billingAddress.city}
                                onChange={handleBillingChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                required
                                label="Province"
                                name="province"
                                value={billingAddress.province}
                                onChange={handleBillingChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                required
                                label="Postal Code"
                                name="postalCode"
                                value={billingAddress.postalCode}
                                onChange={handleBillingChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Country"
                                name="country"
                                value={billingAddress.country}
                                onChange={handleBillingChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Delivery Address */}
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
                        <CardContent>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item xs>
                                    <Typography variant="h5">Delivery Address</Typography>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={useBillingAddress}
                                                onChange={handleUseBillingAddressChange}
                                            />
                                        }
                                        label="Same as billing address"
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                required
                                label="Address Line 1"
                                name="addressLine1"
                                value={deliveryAddress.addressLine1}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Address Line 2"
                                name="addressLine2"
                                value={deliveryAddress.addressLine2}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                required
                                label="City"
                                name="city"
                                value={deliveryAddress.city}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                required
                                label="Province"
                                name="province"
                                value={deliveryAddress.province}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                required
                                label="Postal Code"
                                name="postalCode"
                                value={deliveryAddress.postalCode}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Country"
                                name="country"
                                value={deliveryAddress.country}
                                onChange={handleDeliveryChange}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>




        </Box>
    );
};

export default AddressStepComponent;
