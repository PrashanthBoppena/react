import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, CircularProgress, Button, Avatar, Box, List, ListItem, ListItemText, Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletBalanceRequest } from '@/redux/actions/walletActions';
import { AccountBalanceWallet as AccountBalanceWalletIcon, RecentActorsSharp, AbcOutlined } from '@mui/icons-material';
import PieChartComponent from './CustomPieChart'; // Adjust the path as necessary
import CustomerDetails from './CustomerDetails';
import WalletSection from './WalletSection';

const Customer360Dashboard = () => {
  const profile = useSelector((state) => state.profile);
 // const wallet = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  
  const [tabValue, setTabValue] = useState(0); // State to manage the selected tab index

  const customerID = profile?.customerid;
  const tenantID = 10231;

  

  

  // Data for different pie charts
  const data1 = {
    labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverBackgroundColor: ['#0077E6', '#00B07E', '#E6A825'],
      },
    ],
  };

  const data2 = {
    labels: ['Lorem Ipsum', 'Lorem Ipsum'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#4caf50', '#ffeb3b'],
        hoverBackgroundColor: ['#388e3c', '#fbc02d'],
      },
    ],
  };

  const data3 = {
    labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    datasets: [
      {
        data: [50, 25, 25],
        backgroundColor: ['#3f51b5', '#e91e63', '#9c27b0'],
        hoverBackgroundColor: ['#303f9f', '#c2185b', '#7b1fa2'],
      },
    ],
  };

  const data4 = {
    labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    datasets: [
      {
        data: [80, 10, 10],
        backgroundColor: ['#009688', '#ffc107', '#f44336'],
        hoverBackgroundColor: ['#00796b', '#ffa000', '#d32f2f'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Container>
      {/* Header */}
      
    <Paper
     
     style={{
      padding: '20px',
      textAlign: 'center',
      marginBottom: '20px',
      background: 'linear-gradient(to right, #B5AC49, #3CA55C, #B5AC49)', /* Standard syntax */
      color: '#ffffff', // Text color
      textShadow: '2px 2px 4px rgba(0,0,0,0.4)', // Text shadow for contrast
    }}
    >
      <Container>
        <Typography variant="h4" style={{ fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 4px #000000' }}>
          Customer 360 View
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#ffffff', textShadow: '2px 2px 4px #000000' }}>
          Know your everything about your plans,services & request
        </Typography>
      </Container>
    </Paper>

      

      <Grid container spacing={1} style={{margin: '1px'}}>
        {/* Profile and Accounts Section */}
        {/* Profile and Accounts Section */}
        
        {profile && <CustomerDetails profile={profile} />}
             
                
                
              
          
        

       

        {/* Summary Section */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>Total Request Summary</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data1} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>On-Time Renewals</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data2} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>Total Dispute Summary</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data3} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>On-Time Bill Payments</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data4} options={options} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>


        
      </Grid>
    </Container>
  );
};

export default Customer360Dashboard;
