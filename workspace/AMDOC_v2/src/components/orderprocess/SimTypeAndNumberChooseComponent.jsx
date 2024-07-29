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
    FormControlLabel,
    Select
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SavingsIcon from '@mui/icons-material/Savings'

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux';
import PlanSummaryView from './PlanSummaryView';
import SignUp from '../../views/auth/signup';
import { useHistory, useLocation } from 'react-router-dom';
import { AirlineSeatReclineNormalOutlined, IntegrationInstructionsSharp, Wifi1BarOutlined } from '@mui/icons-material';
import AddressStepComponent from './AddressStepComponent2';
import PaymentPage from './PaymentPage';



const AvailableNumbers = [
    '9876543210', '9123456789', '8765432109', '9123456701',
    '8765432101', '9123456781', '8765432098', '9123456790',
    '8765432190', '9123456782'
];
const SimTypeAndNumberChooseComponent = ({ onData }) => {
    const [simType, setSimType] = useState('Physical SIM');
    const [mobileNumberOption, setMobileNumberOption] = useState('Get a new number');
    const [choosedNumber, setChoosedNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [addOn, setAddOn] = useState(true);

    const step1Data = {
        simType: simType,
        mobileNumber: choosedNumber,
        roaming: addOn
    }
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
                                {/* {console.log(formData.selectedPlan.planName)} */}
                                <strong>{formData.selectedPlan.planName}</strong>-Plan
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
                                <Box display="flex" justifyContent="space-around" alignItems="center">
                                    <Button
                                        variant={mobileNumberOption === 'Get a new number' ? 'contained' : 'outlined'}
                                        onClick={() => handleMobileNumberOptionChange('Get a new number')}
                                    >
                                        Get a new number
                                    </Button>
                                    <Button
                                        variant={mobileNumberOption === 'Get a custom number' ? 'contained' : 'outlined'}
                                        onClick={() => handleMobileNumberOptionChange('Get a custom number')}
                                    >
                                        Get a custom number
                                    </Button>
                                    <Button
                                        variant={mobileNumberOption === 'Keep my number' ? 'contained' : 'outlined'}
                                        onClick={() => handleMobileNumberOptionChange('Keep my number')}
                                    >
                                        Keep my number
                                    </Button>
                                </Box>

                                {mobileNumberOption === 'Get a new number' && (
                                    <Typography variant="body1" mt={2}>
                                        Your new number is: {choosedNumber}
                                    </Typography>
                                )}

                                {mobileNumberOption === 'Get a custom number' && (
                                    <Box mt={2}>
                                        <Typography variant="body1">Choose from available numbers:</Typography>
                                        <Select
                                            value={choosedNumber}
                                            onChange={(e) => onSelectNumber(e.target.value)}
                                            fullWidth
                                            displayEmpty
                                        >
                                            {AvailableNumbers.map((number, index) => (
                                                <MenuItem key={index} value={number}>
                                                    {number}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                )}

                                {mobileNumberOption === 'Keep my number' && (
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Phone Number"

                                        value={choosedNumber}
                                        onChange={(e) => setChoosedNumber(e.target.value)}

                                    />
                                )}
                            </Box>



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
}

export default SimTypeAndNumberChooseComponent
