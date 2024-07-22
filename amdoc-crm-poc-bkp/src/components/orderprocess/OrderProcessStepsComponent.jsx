import React, { useState, useEffect } from 'react';
import * as routes from '../../constants/routes';
import RoamingImage from '../../images/defaultBanner.jpg';
import {
  Stepper, Step, StepLabel,
  TextField, Grid, Container, AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardActions,
  Box,
  Switch,
  MenuItem,
  Paper,
  FormControlLabel
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SavingsIcon from '@mui/icons-material/Savings'

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PlanSummaryView from './PlanSummaryView';
import SignUp from '../../views/auth/signup';
import { useHistory, useLocation } from 'react-router-dom';
import { AirlineSeatReclineNormalOutlined, IntegrationInstructionsSharp, Wifi1BarOutlined } from '@mui/icons-material';
import AddressStepComponent from './AddressStepComponent';

const steps = ['Select Plan', 'Register', 'Address', 'Review', 'Payment'];

const OrderProcessStepsComponent = ({ selectedPlan }) => {
  
  const history = useHistory();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'United States',
    deliveryOption: 'regular',
    pickUpStore: '',
    selectedPlan: selectedPlan || {}
  });
  
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      setFormData({ ...formData, selectedPlan: location.state.selectedPlan });
      //alert(JSON.stringify(location.state.selectedPlan))
    } else {
      // Handle case where selectedPlan is not present in location state
      // Redirect user back to plan selection or handle accordingly
      history.push(routes.HOME); // Adjust route as per your application flow
    }
  }, [location.state]);

  const onClickSignIn = () => {
    history.push('/signin'); // Replace with your sign-in route
  };

  const [simType, setSimType] = useState('Physical SIM');
  const [mobileNumberOption, setMobileNumberOption] = useState('Keep my number');
  const [pinCode, setPinCode] = useState('');
  const [addOn, setAddOn] = useState(true);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (

<Box my={4}>
  <Typography variant="h4" align="center">
    The Best plan for you!
  </Typography>

  <Grid container spacing={4}>
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            SpicaStarter Plan
          </Typography>
          <Box my={2}>
            <Typography variant="h6">SIM Type</Typography>
            <Box display="flex" justifyContent="space-around">
              <Button
                variant={simType === 'Physical SIM' ? 'contained' : 'outlined'}
                onClick={() => setSimType('Physical SIM')}
              >
                Physical SIM
              </Button>
              <Button
                variant={simType === 'eSIM' ? 'contained' : 'outlined'}
                onClick={() => setSimType('eSIM')}
              >
                eSIM
              </Button>
              <Button
                variant={simType === 'I already have a SIM' ? 'contained' : 'outlined'}
                onClick={() => setSimType('I already have a SIM')}
              >
                I already have a SIM
              </Button>
            </Box>
          </Box>

          <Box my={2}>
            <Typography variant="h6">Mobile Number Option</Typography>
            <Box display="flex" justifyContent="space-around">
              <Button
                variant={mobileNumberOption === 'Get a new number' ? 'contained' : 'outlined'}
                onClick={() => setMobileNumberOption('Get a new number')}
              >
                Get a new number
              </Button>
              <Button
                variant={mobileNumberOption === 'Get a custom number' ? 'contained' : 'outlined'}
                onClick={() => setMobileNumberOption('Get a custom number')}
              >
                Get a custom number
              </Button>
              <Button
                variant={mobileNumberOption === 'Keep my number' ? 'contained' : 'outlined'}
                onClick={() => setMobileNumberOption('Keep my number')}
              >
                Keep my number
              </Button>
            </Box>
          </Box>

          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            defaultValue="+1-123-123-1234"
          />
          <FormControl fullWidth margin="normal">
            <TextField
              select
              label="Current Carrier"
              defaultValue="T-Mobile"
            >
              <MenuItem value="T-Mobile">T-Mobile</MenuItem>
              {/* Add other carriers here */}
            </TextField>
          </FormControl>

          <Typography color="textSecondary" gutterBottom>
            Yes, your number can be transferred!
          </Typography>

          <Typography variant="body2" color="textSecondary">
            T-Mobile postpaid wireless accounts: To transfer your current number, you must request a Number Transfer PIN:
            <ol>
              <li>Log in to My T-Mobile (app or website).</li>
              <li>Go to Account, Profile Settings, and then Line Settings.</li>
              <li>Select Request a Transfer PIN.</li>
              <li>Follow verification steps to obtain a PIN.</li>
              <li>After you get your 6-digit PIN, enter it below.</li>
            </ol>
            You can also dial 611 to request a PIN from a T-Mobile agent.
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Passcode or PIN code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />

          <Box my={2}>
            <Typography variant="h4">Freebees and benefits</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-around">
              <Box display="flex" alignItems="center">
                <FlightIcon color="primary" />
                <Typography variant="h5" color="primary" style={{ marginLeft: 8 }}>
                  $200 OFF on Flights
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <HotelIcon color="primary" />
                <Typography variant="h5" color="primary" style={{ marginLeft: 8 }}>
                  $200 OFF on Hotels
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LiveTvIcon color="primary" />
                <Typography variant="h5" color="primary" style={{ marginLeft: 8 }}>
                  $100 OFF on Sling
                </Typography>
              </Box>
             
            </Box>
            
          </Box>
          <Box display="flex" alignItems="center">
                <SavingsIcon color="primary" />
                <Typography variant="h6" color="primary" style={{ marginLeft: 8 }}>
                  Save $500 on services!
                </Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
  </Grid>

  <Box my={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add-ons
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Need more of your plan? Try adding an add-on to your subscription, pay a bit more every month and add extra features to your plan! These add-ons can be cancelled at any time.
          </Typography>

          <Card style={{ backgroundColor: '#f9f9f9' }}>
            <CardContent display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" gutterBottom>
                  <IntegrationInstructionsSharp color="primary" /> Roaming
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={addOn}
                      onChange={(e) => setAddOn(e.target.checked)}
                    />
                  }
                  label="Roaming"
                />
              </Box>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Outside our network, services will continue to be provided by Dish.
              </Typography>
            </CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card style={{ backgroundColor: '#f5f5f5' }}>
                  <Box
                    style={{
                      backgroundImage: `url(${RoamingImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '75px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      60 min Roaming: $5/mo
                    </Typography>
                    <Button
                      variant={addOn === '60 min Roaming' ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={() => setAddOn('60 min Roaming')}
                      style={{ marginTop: '8px' }}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card style={{ backgroundColor: '#f5f5f5' }}>
                  <Box
                    style={{
                      backgroundImage: `url(${RoamingImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '75px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      200 min Roaming: $20/mo
                    </Typography>
                    <Button
                      variant={addOn === '200 min Roaming' ? 'contained' : 'outlined'}
                      color="primary"
                      onClick={() => setAddOn('200 min Roaming')}
                      style={{ marginTop: '8px' }}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </CardContent>
      </Card>
    </Box>
</Box>

        );
      case 1:
        return (
          <div>
            <SignUp onClickSignIn={onClickSignIn} />
          </div>
        );
      case 2:
        return (
          <div>
            <AddressStepComponent/>
         </div>
        );
      case 3:
        return (
          <div>
            <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemText primary="SpicaStarter Plan" secondary="$5/mo" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Physical SIM" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data" secondary="1 GB" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Voice" secondary="Unlimited" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Text" secondary="Unlimited" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Transfer number" secondary="+1-123-123-1234" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Add-ons" secondary="Roaming 60 min by Dish $5/mo" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Promo code applied" secondary="- $5/mo (05-SPICADISCOUNT)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Estimated taxes" secondary="$5" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Recurring charge total" secondary="$10/mo (Charged every 30 days)" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={2}>
              <Typography variant="subtitle1">Billing address</Typography>
              <Typography variant="body2">
                [Street address]
                <br />
                [Apartment, Suite, Unit, Building]
                <br />
                [City]
                <br />
                [Province/Territory]
                <br />
                [ZIP/Post code]
                <br />
                [Phone number]
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Delivery address</Typography>
              <Typography variant="body2">
                [Street address]
                <br />
                [Apartment, Suite, Unit, Building]
                <br />
                [City]
                <br />
                [Province/Territory]
                <br />
                [ZIP/Post code]
                <br />
                [Phone number]
              </Typography>
            </Box>
            <Button variant="text" color="primary">
              Change address
            </Button>
          </Grid>
        </Grid>
        <Box mt={2} p={2} bgcolor="grey.200">
          <Typography variant="subtitle1">Due today:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Delivery fee" secondary="$1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="One-time activation fee" secondary="$10" />
            </ListItem>
            <ListItem>
              <ListItemText primary="First month charge" secondary="$10" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Total" secondary="$21" />
            </ListItem>
          </List>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Proceed to Pay
        </Button>
      </Paper>
    </Container>
          </div>
        );
      case 4:
        return (
          <div>
            <Typography variant="h6">Payment</Typography>
            <TextField label="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Expiry Date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="CVV" name="cvv" value={formData.cvv} onChange={handleChange} fullWidth margin="normal" />
          </div>
        );
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Steps View in Card Format */}
        <Grid item xs={12}>
          <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </Grid>

        {/* Content and Summary Section */}
        <Grid container spacing={3}>
          {/* Content Section (70%) */}
          <Grid item xs={12} md={8}>
            {renderStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </Grid>

          {/* Plan Summary Section (30%) */}
          <Grid item xs={12} md={4}>
            <PlanSummaryView selectedPlan={formData.selectedPlan} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderProcessStepsComponent;
