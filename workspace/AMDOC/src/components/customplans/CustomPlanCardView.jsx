import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';

function CustomPlanCardView({ planName, price, features, style }) {
  return (
    <Card sx={{ minWidth: 500, borderRadius: 8, marginRight: 1, marginBottom: 10, color: 'white', ...style }}>
      <CardContent>
        <Typography variant="h5" component="div">{planName}</Typography>
        <Typography variant="h6" component="div" sx={{ marginTop: 1, marginBottom: 2 }}>
          ${price}/mo
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {features.map((feature, index) => (
            <li key={index}><Typography variant="body2">{feature}</Typography></li>
          ))}
        </ul>
        <Button variant="contained" sx={{ marginTop: 2 }}>Buy Now</Button>
      </CardContent>
    </Card>
  );
}

CustomPlanCardView.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object
};

export default CustomPlanCardView;
