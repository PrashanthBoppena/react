import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Box, List, ListItem, ListItemText, ListItemIcon, Card, CardContent, Divider, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ListItemAvatar } from '@mui/material';
import { AccountBalanceWallet, AccountCircle, Assignment, Dashboard, ElectricCarOutlined, Email, ContactMail, LocationOn, History, VerifiedUser, Payment, LocalAtm, Timelapse, Chat, Support, Balance, Diversity1 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CustomerDetails from './CustomerDetails';
import PieChartComponent from './CustomPieChart'; // Adjust the path as necessary
import { WhyEcogreenSection } from '@components/customplans';
import { SentEmailOfferLinkSection } from '@components/customplans';
import './WalletSection.css'; 
import TicketDetailsTab from './TicketDetailsTab';


const Customer360Dashboard = () => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const [selectedOption, setSelectedOption] = useState('profile'); // State to manage the selected option
  const customerID = profile?.customerid;
  const tenantID = 10231;

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency || 'INR',
    }).format(amount);
  };

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

  const renderTable = (data) => {
   
      return (
        <Card style={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography>No data available</Typography>
          </CardContent>
        </Card>
      );
    
  };
  
  const renderContent = () => {
   

    switch (selectedOption) {
      case 'profile':
        return (
          profile && (
            <Card style={{ backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <CustomerDetails profile={profile} />
              </CardContent>
            </Card>
          )
        );
        case 'walletHistory':
          return (
            <TicketDetailsTab/>
          );
          case 'contacts':
          return (
            <TicketDetailsTab/>
          );
        case 'disputes':
          return <TicketDetailsTab/>;
        case 'requests':
          return <TicketDetailsTab/>;
        case 'transactions':
          return <TicketDetailsTab/>;
        case 'bills':
          return <TicketDetailsTab/>;
        case 'billingAccount':
          return <TicketDetailsTab/>;
        case 'balancesShare':
          return <TicketDetailsTab/>;
        case 'slaPerformance':
          return <TicketDetailsTab/>;
        case 'interaction':
          return <TicketDetailsTab/>;
        case 'ticketDetails':
          return <TicketDetailsTab/>;
        
      default:
        return  
        (<Card style={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography>No data available</Typography>
          </CardContent>
        </Card>) ;
      
    }
  };

  return (
    <Container>
      <Divider/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper style={{ padding: '20px' }}>
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Avatar src='/src/images/banner-guy.png' alt="Avatar" style={{ width: 50, height: 50 }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{profile?.fullname}</Typography>
            <Typography variant="h5">{profile?.customerid}</Typography>
            <Typography variant="h6" style={{ fontWeight: 'bold', color: '#3CA55C' }}>
              {profile?.custType} - {profile?.userLevel}
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={2} alignItems="center">
            {/* <Grid item xs={12}>
              <Typography variant="h5">{wallet?.walletID}</Typography>
            </Grid> */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center" className="wallet-balance-box">
                <Typography variant="h6" className="wallet-balance-text" style={{ marginRight: '8px'}}>
                Wallet Balance <br/>( Id: {wallet?.walletID})
                </Typography>
                <Typography variant="h3" className="wallet-balance-text" style={{ margin: '0 8px' }}>
                  |
                </Typography>
                <Typography variant="h5" className="wallet-balance-text" style={{ color: '#FFBB28' }}>
                  {formatCurrency(wallet?.amountRemaining, profile?.currency)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
   

<Divider/>
            <List >
              <ListItem sx={{ color: 'inherit',fontSize:'14' }} button selected={selectedOption === 'profile'} onClick={() => setSelectedOption('profile')}>
              <ListItemAvatar>
                    <Avatar>
                      <AccountCircle />
                    </Avatar>
                  </ListItemAvatar>
                
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Profile')}  />
              </ListItem>
             
              <Divider />
              <ListItem className="custom-list-item" button selected={selectedOption === 'contacts'} onClick={() => setSelectedOption('contacts')}>
               
                <ListItemIcon >
                  <ContactMail />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Contacts & Addresses')} />
              </ListItem>
              <ListItem className="custom-list-item" button selected={selectedOption === 'walletHistory'} onClick={() => setSelectedOption('walletHistory')}>
                <ListItemIcon >
                  <AccountBalanceWallet />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Wallet History')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'disputes'} onClick={() => setSelectedOption('disputes')}>
                <ListItemIcon >
                  <History />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Disputes')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'requests'} onClick={() => setSelectedOption('requests')}>
                <ListItemIcon >
                  <VerifiedUser />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Requests')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'transactions'} onClick={() => setSelectedOption('transactions')}>
                <ListItemIcon >
                  <Payment />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Transactions')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'bills'} onClick={() => setSelectedOption('bills')}>
                <ListItemIcon >
                  <LocalAtm />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Bills')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'billingAccount'} onClick={() => setSelectedOption('billingAccount')}>
                <ListItemIcon >
                  <AccountBalanceWallet />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Billing Account Details')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'balancesShare'} onClick={() => setSelectedOption('balancesShare')}>
                <ListItemIcon >
                  <Balance />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Balances Share')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'slaPerformance'} onClick={() => setSelectedOption('slaPerformance')}>
                <ListItemIcon >
                  <Timelapse />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('SLA Performance')} />
              </ListItem>
              <ListItem button selected={selectedOption === 'interaction'} onClick={() => setSelectedOption('interaction')}>
                <ListItemIcon  >
                  <Chat />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Interaction')}  />
              </ListItem>
              <ListItem button selected={selectedOption === 'ticketDetails'} onClick={() => setSelectedOption('ticketDetails')}>
                <ListItemIcon >
                  <Support />
                </ListItemIcon>
                 <ListItemText  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}  primary={t('Ticket Details')} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          
          {renderContent()}
          
          <WhyEcogreenSection/>
          
          
        </Grid>
        <Card style={{ width: '100%', marginTop: '20px' }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fff3e0' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('total_request_summary')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data1} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('on_time_renewals')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data2} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f3e5f5' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('total_dispute_summary')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data3} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#c8e6c9' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('total_request_summary')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data4} options={options} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          </Card>
        <SentEmailOfferLinkSection/>
      </Grid>
    </Container>
  );
};

export default Customer360Dashboard;
