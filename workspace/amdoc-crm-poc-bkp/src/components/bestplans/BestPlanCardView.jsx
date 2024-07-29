import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as routes from '../../constants/routes'
const BestPlanCardView = ({ planName, price, features, tagline, style, popularPlan, onSelectPlan }) => {
  
  const handleSelectPlan = () => {
    onSelectPlan({ planName, price, features, tagline }); // Pass plan details to parent component
  };

  return (
    <div style={{ ...style, padding: '20px', borderRadius: '10px', color: '#fff', textAlign: 'left', position: 'relative' }}>
      {popularPlan && (
        <div style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          backgroundColor: '#ff0',
          color: '#000',
          padding: '1px 1px',
          borderRadius: '10px',
          fontWeight: 'bold',
          width:'100%',
          textAlign: 'center'
        }}>
          Popular Plan
        </div>
      )}
      <h2>{tagline}</h2>
      <h3>{planName}</h3>
      <p style={{ fontSize: '2.5em', margin: '10px 0' }}>${price.toFixed(2)}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        cursor: 'pointer',
        width: '100%'
      }} onClick={handleSelectPlan}>
        I WANT THIS PLAN
      </button>
    </div>
  );
};

BestPlanCardView.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  tagline: PropTypes.string,
  style: PropTypes.object,
  popularPlan: PropTypes.bool,
  onSelectPlan: PropTypes.func.isRequired // Function to handle plan selection
};

export default BestPlanCardView;
