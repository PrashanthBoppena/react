import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'; // Import react-i18next functions
import { getCustomerRequest, getCustomerAccountsRequest } from '../../redux/actions/customerActions';

import { Container, Paper, Typography, Grid, CircularProgress, List, ListItem, ListItemText, Button, Avatar, Tabs, Tab, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { RecentActorsSharp, AbcOutlined } from '@mui/icons-material';
import WalletSection from './WalletSection';


const CustomerDetails = ({ profile }) => {
  const { t } = useTranslation(); // Translation function

  const wallet = useSelector((state) => state.wallet);
  const authToken = localStorage.getItem('authToken');
  const dispatch = useDispatch();

  const customerID = profile?.customerid;
  const tenantID = '10231';


  useEffect(() => {
    if (customerID && tenantID) {
      dispatch(getCustomerRequest(customerID, tenantID));
    }
  }, [dispatch, customerID, tenantID]);

  useEffect(() => {
    if (customerID && tenantID) {
      dispatch(getCustomerAccountsRequest(customerID, tenantID));
    }
  }, [dispatch, customerID, tenantID]);

  const { loading: loadingCustomer, error: errorCustomer, customer } = useSelector((state) => state.customer);
  const { loading: loadingAccounts, error: errorAccounts, customerAccounts } = useSelector((state) => state.customerAccounts);

  const [tabValue, setTabValue] = useState(0); // State to manage the selected tab index
  const [showAllAccounts, setShowAllAccounts] = useState(false); // State to manage showing all accounts

  const getAccountTypeName = (typeCode) => {
    switch (typeCode) {
      case '12':
        return t('postpaid'); // Translate type names
      case '11':
        return t('prepaid'); // Translate type names
      default:
        return t('unknownType'); // Translate type names
    }
  };

  const getStatus = (isActive) => {
    return isActive ? t('inactive') : t('active'); // Translate status
  };

  // Helper functions to filter accounts by status and type
  const filterByStatus = (isActive) => {
    return customerAccounts?.result?.filter(account => account.customerAccountType === '12' && account.status === isActive);
  };

  const filterByType = (typeCode) => {
    return customerAccounts?.result?.filter(account => account.customerAccountType === typeCode);
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle showing more accounts
  const handleShowMore = () => {
    setShowAllAccounts(!showAllAccounts);
  };

  const renderAccounts = (accounts) => {
    if (!accounts || accounts.length === 0) {
      return <Typography>{t('noAccounts')}</Typography>; // Translate message
    }

    return accounts.slice(0, 4).map((account) => (
      <React.Fragment key={account.customerAccountID}>
        <ListItem>
          <ListItemText
            primary={<span style={{ fontWeight: 'bold' }}>{getAccountTypeName(account.customerAccountType)}</span>}
            secondary={<span style={{ color: '#0000ff' }}>{`${account.customerAccountID} (${getStatus(account.status)})`}</span>}
          />
        </ListItem>
        <hr style={{ borderTop: '1px dashed #ccc', margin: '5px 0' }} />
      </React.Fragment>
    ));
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="stretch">
        {/* Customer Info Section */}
        <Grid item xs={12} md={4}>
          <Paper style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%', 
            background: '#c6ffdd',
            background: '-webkit-linear-gradient(to right, #fffff, #fbd786)',
            background: 'linear-gradient(to right, #fbd786, #c6ffdd)' 
          }}>
            {loadingCustomer ? (
              <CircularProgress />
            ) : errorCustomer ? (
              <Typography color="error">{errorCustomer}</Typography>
            ) : (
              customer && customer.result && customer.result[0] && (
                <Box p={2}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar src={customer.result[0].gender === 'Male' ? '/src/images/banner-guy.png' : '/src/images/banner-girl.png'} alt="Avatar" style={{ width: 60, height: 60 }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">{profile?.fullname}</Typography>
                      <Typography variant="body2">{profile?.customerid}</Typography>
                      <Typography variant="body2" style={{ fontWeight: 'bold' }}>{profile?.custType} - {profile?.userLevel}</Typography>
                    </Grid>
                  </Grid>
                  <hr style={{ borderTop: '1px dashed #ccc', margin: '10px 0' }} /> {/* Divider line */}
                  <Box mt={2}>
                    <Box display="flex" alignItems="center" margin="8px 0">
                      <EmailIcon style={{ marginRight: '16px' }} />
                      <Typography variant="body1"><strong>{t('email')}:</strong> {customer.result[0].contactList && customer.result[0].contactList[0]?.primaryEmail}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" margin="8px 0">
                      <PhoneIcon style={{ marginRight: '16px' }} />
                      <Typography variant="body1"><strong>{t('mobile')}:</strong> {customer.result[0].contactList && customer.result[0].contactList[0]?.primaryMobile}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" margin="8px 0">
                      <LocationOnIcon style={{ marginRight: '16px' }} />
                      <Typography variant="body1">
                        <strong>{t('address')}:</strong> {customer.result[0].addressList && customer.result[0].addressList[0]?.addressLine1}, {customer.result[0].addressList && customer.result[0].addressList[0]?.addressCity}, {customer.result[0].addressList && customer.result[0].addressList[0]?.addressState}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" margin="8px 0">
                      <AccountBalanceWalletIcon style={{ marginRight: '16px' }} />
                      <Typography variant="body1"><strong>{t('billingCycle')}:</strong> {customer.result[0].billCycle}</Typography>
                    </Box>
                    <hr style={{ borderTop: '1px dashed #ccc', margin: '10px 0' }} /> {/* Divider line */}
                    <Box mt={2}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Button variant="contained" fullWidth style={{ marginBottom: '10px', backgroundColor: '#64b5f6', color: 'white' }}>
                            {t('loadWallet')}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" fullWidth style={{ marginBottom: '10px', backgroundColor: '#64b5f6', color: 'white' }}>
                            <RecentActorsSharp /> {t('recharge')}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" fullWidth style={{ marginBottom: '10px', backgroundColor: '#64b5f6', color: 'white' }}>
                            <AbcOutlined /> {t('payBills')}
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" fullWidth style={{ backgroundColor: '#64b5f6', color: 'white' }}>
                            {t('myOverview')}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </Paper>
        </Grid>

        {/* Accounts Section */}
        <Grid item xs={12} md={4}>
          <Paper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', background: '#ffefba', background: '-webkit-linear-gradient(to right, #ffefba, #ffff)', background: 'linear-gradient(to right, #ffff, #ffefba)' }}>
            <Box p={2}>
              <Typography variant="h4" style={{ color: '#ff0000' }}>{t('myAccounts')}</Typography>
              <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
                <Tab label={<span style={{ fontWeight: 'bold' }}>{t('all')}</span>} />
                <Tab label={<span style={{ fontWeight: 'bold' }}>{t('byStatus')}</span>} />
                <Tab label={<span style={{ fontWeight: 'bold' }}>{t('byType')}</span>} />
              </Tabs>
              {loadingAccounts ? (
                <CircularProgress />
              ) : errorAccounts ? (
                <Typography color="error">{t('errorLoadingAccounts')}</Typography>
              ) : (
                <List>
                  {tabValue === 0 && renderAccounts(customerAccounts?.result)}
                  {tabValue === 1 && renderAccounts(filterByStatus(false))}
                  {tabValue === 2 && renderAccounts(filterByType('12'))}
                </List>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* Wallet Section */}
        <Grid item xs={12} md={4}>
          <Paper style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            height: '100%', 
            background: '#c6ffdd',
            background: '-webkit-linear-gradient(to right, #c6ffdd, #fbd786)',
            background: 'linear-gradient(to right, #fbd786, #c6ffdd)' 
          }}>
            <WalletSection  profile={profile} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerDetails;
