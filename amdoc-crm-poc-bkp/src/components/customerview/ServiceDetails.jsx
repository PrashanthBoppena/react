import React from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Chip } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ServiceDetails = ({ services }) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Services</Typography>
      <List>
        {services.map((service) => (
          <ListItem key={service.id} disablePadding>
            <ListItemText
              primary={service.name}
              secondary={service.description}
            />
            <ListItemSecondaryAction>
              <Chip
                icon={<VerifiedUserIcon />}
                label={service.status}
                color={service.status === 'Active' ? 'primary' : 'default'}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ServiceDetails;
