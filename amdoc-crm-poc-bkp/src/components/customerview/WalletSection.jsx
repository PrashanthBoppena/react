import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './WalletSection.css'; // Make sure to create and import the CSS file

const WalletSection = ({ wallet, profile }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency || 'INR',
    }).format(amount);
  };

  return (
    <Grid item xs={12} md={12}>
      <div
        className={`wallet-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AccountBalanceWalletIcon className="wallet-icon" />
        <Typography variant="h3">Wallet</Typography>
        <Typography variant="h5">{wallet?.walletID}</Typography>
        <Box className="wallet-balance-box">
          <Typography variant="h4" className="wallet-balance-text">
            Wallet <br /> Balance
          </Typography>
          <Typography variant="h2" className="wallet-balance-text">|</Typography>
          <Typography variant="h4" className="wallet-balance-text">
            {formatCurrency(wallet?.amountRemaining, profile?.currency)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          className="add-money-button"
        >
          Add Money
        </Button>
      </div>
    </Grid>
  );
};

export default WalletSection;
