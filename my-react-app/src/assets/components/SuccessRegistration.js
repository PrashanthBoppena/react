// SuccessRegistration.js
import React from 'react';
import { useRegistrationContext } from './RegistrationContext';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation

function SuccessRegistration() {
    const { registrationData } = useRegistrationContext(); // Ensure this is correctly imported and used

    return (
        <div>
            <h2>Registration Successful!</h2>
            <p>Welcome, {registrationData.username}!</p>
            <p>Proceed to <Link to="/">Login</Link></p>
        </div>
    );
}

export default SuccessRegistration;
