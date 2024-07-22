import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CustomerDetails from './CustomerDetails';
import PieChartComponent from './CustomPieChart'; // Adjust the path as necessary
import { BestPlanComponent } from '@components/bestplans';
import { WhyEcogreenSection } from '@components/customplans';
import { SentEmailOfferLinkSection } from '@components/customplans';

const Customer360Dashboard = () => {
  const { t } = useTranslation();
 
  const profile = useSelector((state) => state.profile);
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
      <Paper
        style={{
          padding: '20px',
          textAlign: 'center',
          marginBottom: '20px',
          background: 'linear-gradient(to right, #B5AC49, #3CA55C, #B5AC49)',
          color: '#ffffff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
          backgroundImage: 'url(/src/images/123.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
         <Container>
      <Typography variant="h3" style={{ fontWeight: 'bold', color: '#ffffff', textShadow: '2px 2px 4px #000000' }}>
        {t('Customer_360_VIEW')}
      </Typography>
      <Typography variant="subtitle1" style={{ color: '#ffffff', textShadow: '2px 2px 4px #000000' }}>
        Know your everything about your plans, services & request
      </Typography>
    </Container>
      </Paper>

      <Grid container spacing={1} style={{ margin: '1px' }}>
        {profile && <CustomerDetails profile={profile} />}
        
        <BestPlanComponent />

        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('total_request_summary')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data1} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('on_time_renewals')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data2} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('total_dispute_summary')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data3} options={options} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: '#ff0000' }}>{t('on_time_bill_payments')}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <PieChartComponent data={data4} options={options} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <WhyEcogreenSection />
        <SentEmailOfferLinkSection />
      </Grid>
    </Container>
  );
};

export default Customer360Dashboard;
