import React, { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registrationData, setRegistrationData] = useState(null);

    return (
        <RegistrationContext.Provider value={{ registrationData, setRegistrationData }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistrationContext = () => useContext(RegistrationContext);