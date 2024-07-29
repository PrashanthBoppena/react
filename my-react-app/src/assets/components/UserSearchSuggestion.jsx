import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography, Box, Container } from '@mui/material';

const UserSearchSuggestion = () => {
  // Array of 10 mobile numbers
  const mobileNumbers = [
    '9876543210', '9123456789', '8765432109', '9123456701',
    '8765432101', '9123456781', '8765432098', '9123456790',
    '8765432190', '9123456782'
  ];

  const [input, setInput] = useState('');
  const [suggestedNumbers, setSuggestedNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    // Filter suggested numbers based on the input
    if (value) {
      const filteredNumbers = mobileNumbers.filter(number => number.startsWith(value));
      setSuggestedNumbers(filteredNumbers);
    } else {
      setSuggestedNumbers([]);
    }
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    setInput(number);
    setSuggestedNumbers([]);
    setError('');
  };

  const handleSubmit = () => {
    if (mobileNumbers.includes(input)) {
      setSelectedNumber(input);
      setError('');
    } else {
      setError('Choose from suggested numbers');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h6">Search for Mobile Number</Typography>
        <TextField
          fullWidth
          label="Enter Number Series"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
          error={!!error}
          helperText={error}
        />
        {suggestedNumbers.length > 0 && (
          <List>
            {suggestedNumbers.map((number) => (
              <ListItem button key={number} onClick={() => handleNumberClick(number)}>
                <ListItemText primary={number} />
              </ListItem>
            ))}
          </List>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Get Custom Number
        </Button>
        {selectedNumber && (
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Selected Number: {selectedNumber}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default UserSearchSuggestion;
