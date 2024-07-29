import React, { useState } from 'react';
import CustomPlanCardView from '@/components/customplans/CustomPlanCardView';
import { Button } from '@mui/material';

const CustomPlanComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const plans = [
    {
      planName: 'Basic Plan',
      price: 29.99,
      features: ['Unlimited Calls', '50 GB Data', '100 SMS'],
    },
    {
      planName: 'Premium Plan',
      price: 49.99,
      features: ['Unlimited Calls', '100 GB Data', '200 SMS'],
    },
    // Add more plans as needed
  ];

  const gradients = [
    'linear-gradient(to right, #f6d365, #fda085)',  // Light yellow to light orange
    'linear-gradient(to right, #a8e063, #56ab2f)',  // Light green to darker green
    'linear-gradient(to right, #ffecd2, #fcb69f)',  // Very light yellow to light peach
    'linear-gradient(to right, #d4fc79, #96e6a1)',  // Light yellow-green to light green
    'linear-gradient(to right, #ffe29f, #ffa99f)'   // Light yellow to light pink
  ];

  const displayPlans = showAll ? plans : plans.slice(0, 2);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Prepare your custom plans</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {displayPlans.map((plan, index) => (
          <div key={index} style={{ width: '50%', padding: '2px', boxSizing: 'border-box' }}>
            <CustomPlanCardView
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
              style={{ background: gradients[index % gradients.length] }}
            />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default CustomPlanComponent;
