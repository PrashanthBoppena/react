import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Divider, List,CardActions,Button, ListItem, ListItemText, Grid } from '@mui/material';
import { Wifi, VoiceOverOff, Chat, CallMadeOutlined, LocalActivitySharp, PaymentOutlined, Summarize } from '@mui/icons-material';
import { MoneyCollectTwoTone } from '@ant-design/icons';

const PlanSummaryView = ({ selectedPlan }) => {
  if (!selectedPlan) {
    return null;
  }

  const { planName, features = [], price } = selectedPlan;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {planName || 'Plan Name'}
        </Typography>
        <Divider />

        {/* Due Monthly Section */}
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Due Monthly
        </Typography>
        <List dense>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <Wifi fontSize="small" />
              </Grid>
              <Grid item xs={11}>
                <ListItemText primary={<Typography variant="body1"><strong>Data:</strong> {features[0] || '1 GB'}</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <VoiceOverOff fontSize="small" />
              </Grid>
              <Grid item xs={11}>
                <ListItemText primary={<Typography variant="body1"><strong>Voice:</strong> {features[1] || 'Unlimited'}</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <Chat fontSize="small" />
              </Grid>
              <Grid item xs={11}>
                <ListItemText primary={<Typography variant="body1"><strong>Text:</strong> {features[2] || 'Unlimited'}</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <ListItemText primary={<Typography variant="body1"><strong>Transfer number:</strong> +1-123-123-1234</Typography>} />
          </ListItem>
        </List>

        {/* Add-ons Section */}
        <Divider />
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Add-ons
        </Typography>
        <List dense>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <CallMadeOutlined fontSize="small" />
              </Grid>
              <Grid item xs={8}>
                <ListItemText primary={<Typography variant="body1"><strong>Roaming:</strong> </Typography>} />
              </Grid>
              <Grid item xs={3}>
                <ListItemText primary={<Typography variant="body1"> 60 min by Dish - $5/mo</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
        </List>

        {/* Estimated Charges Section */}
        <Divider />
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Estimated Charges
        </Typography>
        <List dense>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <PaymentOutlined fontSize="small" />
              </Grid>
              <Grid item xs={9}>
                <ListItemText primary={<Typography variant="body1"><strong>Estimated taxes:</strong></Typography>} />
              </Grid>
              <Grid item xs={2}>
                <ListItemText primary={<Typography variant="body1"> $5</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <Summarize fontSize="small" />
              </Grid>
              <Grid item xs={9}>
                <ListItemText primary={<Typography variant="body1"><strong>Recurring charge total:</strong></Typography>} />
              </Grid>
              <Grid item xs={2}>
                <ListItemText primary={<Typography variant="body1">$15/mo</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
        </List>

        {/* Due Today Section */}
        <Divider />
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Due Today
        </Typography>
        <List dense>
          <ListItem>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <LocalActivitySharp fontSize="small" />
              </Grid>
              <Grid item xs={9}>
                <ListItemText primary={<Typography variant="body1"><strong>One-time activation fee:</strong></Typography>} />
              </Grid>
              <Grid item xs={2}>
                <ListItemText primary={<Typography variant="body1"> $10</Typography>} />
              </Grid>
            </Grid>
          </ListItem>
        </List>

        {/* Total Due Section */}
        <Divider />
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <MoneyCollectTwoTone fontSize="small" />
          </Grid>
          <Grid item xs={9}>
            <ListItemText primary={<Typography variant="body1"><strong>Total Due </strong></Typography>} />
          </Grid>
          <Grid item xs={2}>
            <ListItemText primary={<Typography variant="body1"> <strong>₹{price}</strong></Typography>} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary">
          Check out
        </Button>
      </CardActions>
    </Card>
  );
};

PlanSummaryView.propTypes = {
  selectedPlan: PropTypes.shape({
    planName: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number
  })
};

PlanSummaryView.defaultProps = {
  selectedPlan: {
    planName: 'Default Plan',
    features: ['1 GB', 'Unlimited', 'Unlimited'],
    price: 25
  }
};

export default PlanSummaryView;
