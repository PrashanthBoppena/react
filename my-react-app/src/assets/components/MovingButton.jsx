import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const FormWithMovingButton = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isFormValid, setIsFormValid] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const isValid = formData.name.trim() !== '' && formData.email.trim() !== '';
        setIsFormValid(isValid);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            alert('Form submitted!');
        }
    };

    return (
        <Box sx={{ width: 300, margin: 'auto', padding: 2 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
                <Box sx={{ position: 'relative', marginTop: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            position: 'absolute',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'translateX(200px)', // Move button 20px to the right on hover
                            },
                            left: 0, // Start position
                            top: 0,
                        }}
                        disabled={!isFormValid} // Disable button if form is invalid
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default FormWithMovingButton;
