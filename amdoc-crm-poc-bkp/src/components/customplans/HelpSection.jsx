import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Chat, DialerSip, PhoneAndroid } from '@mui/icons-material';

const HelpSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email.'
    },
    {
      id: 2,
      question: 'Where can I find my account settings?',
      answer: 'You can find your account settings under your profile menu. Click on your profile picture/name to access it.'
    },
    {
      id: 3,
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support through our email support or live chat feature available on our website.'
    }
    // Add more questions as needed
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id === selectedQuestion ? null : id);
  };

  return (
    <Container sx={{ mt: 4, backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom align="center">
      Need Our Help?
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="center">
      Find answers to frequently asked questions about our products and services
    </Typography>
      <Grid container spacing={3}>
        {/* Questions */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {questions.map((q) => (
            <Paper key={q.id} style={{ padding: '1rem', marginBottom: '0.5rem', cursor: 'pointer', position: 'relative' }} onClick={() => handleQuestionClick(q.id)}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                {q.question}
              </Typography>
              {selectedQuestion === q.id && (
                <Typography style={{ marginTop: '0.5rem' }}>
                  {q.answer}
                </Typography>
              )}
              <IconButton
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                size="small"
                color="primary"
                onClick={() => handleQuestionClick(q.id)}
              >
                {selectedQuestion === q.id ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            </Paper>
          ))}
        </Grid>
        
        {/* chat section */}
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'left', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <IconButton
              style={{ position: 'absolute', top: '10px', left: '10px' }}
              size="large"
              color="primary"
              aria-label="phone"
            >
              <DialerSip fontSize="large" />
            </IconButton>
            <div style={{ paddingLeft: '50px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Still have questions?
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '1rem' }}>
                Reach out to us for assistance.
              </Typography>
            </div>
            <Button variant="contained" color="secondary" component="a" href="#chat" style={{ alignSelf: 'flex-end', width: '100%' }}>
              <IconButton
                size="small"
                color="primary"
                aria-label="chat"
              >
                <Chat fontSize="small" />
              </IconButton>
              Chat with us
            </Button>
          </Paper>
        </Grid>

        </Grid>
    </Container>
  );
};

export default HelpSection;
