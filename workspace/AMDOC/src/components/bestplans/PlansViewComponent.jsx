import React, { useState } from 'react';
import BestPlanCardView from '@/components/bestplans/BestPlanCardView';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import * as routes from '../../constants/routes'
const PlansViewComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const [showNormal, setShowNormal] = useState(true); // State for normal plans
  const [showElite, setShowElite] = useState(false); // State for elite plans
  const [selectedPlan, setSelectedPlan] = useState(null);
  const history = useHistory();

  const handleSelectPlan = (planData) => {
    
    setSelectedPlan(planData);

   
    // Navigate to the multi-step form route
     // Navigate to the multi-step form route
     history.push({
      pathname: routes.ORDER_PROCESS, // Adjust based on your route configuration
      state: { selectedPlan: planData } // Pass selectedPlan as state
    });
  };
  const normalPlans = [
    {
      planName: 'SpicaStarter',
      price: 15,
      features: ['1 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'START USING NOW',
      popularPlan: false, // Example: No popular plan flag for this plan
    },
    {
      planName: 'SpicaValue',
      price: 25,
      features: ['8 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'DATA for all day use',
      popularPlan: true, // Example: Popular plan flag for this plan
    },
    {
      planName: 'SpicaValue-3',
      price: 45,
      features: ['8 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'DATA for all day use',
      popularPlan: false, // Example: No popular plan flag for this plan
    },
    {
      planName: 'SpicaValue-4',
      price: 60,
      features: ['8 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'DATA for all day use',
      popularPlan: true, // Example: Popular plan flag for this plan
    },
    // Add more normal plans as needed
  ];

  const elitePlans = [
    {
      planName: 'Royal Black',
      price: 35,
      features: ['15 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'PERFECT FOR all your communication needs',
      popularPlan: false, // Example: No popular plan flag for this plan
    },
    {
      planName: 'Smart King',
      price: 45,
      features: ['20 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'SpicALOT Stream, play, talk everywhere',
      popularPlan: false, // Example: No popular plan flag for this plan
    },
    {
      planName: 'Smart King2',
      price: 60,
      features: ['20 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'SpicALOT Stream, play, talk everywhere',
      popularPlan: true, // Example: Popular plan flag for this plan
    },
    {
      planName: 'Smart King -O',
      price: 70,
      features: ['20 GB Data', 'Unlimited Minutes', 'Unlimited Texts', '4G and 5G', 'eSIM'],
      tagline: 'SpicALOT Stream, play, talk everywhere',
      popularPlan: false, // Example: No popular plan flag for this plan
    },
    // Add more elite plans as needed
  ];

  const gradients = [
    'linear-gradient(to right, #d4fc79, #96e6a1)',  // Light yellow-green to light green
    'linear-gradient(to right, #ffe29f, #ffa99f)',  // Light yellow to light pink
    'linear-gradient(to right, #f6d365, #fda085)',  // Light yellow to light orange
    'linear-gradient(to right, #a8e063, #56ab2f)',  // Light green to darker green
    'linear-gradient(to right, #ffecd2, #fcb69f)',  // Very light yellow to light peach
  ];

  let displayPlans = showNormal ? normalPlans : elitePlans;

  if (!showAll) {
    displayPlans = displayPlans.slice(0, 4);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Get the best plan</h1>
      <h5 style={{ textAlign: 'center' }}>Select one of our recommended plans</h5>
      
      {/* Toggle buttons for Normal Plans and Elite Plans */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button
          variant="contained"
          onClick={() => {
            setShowNormal(true);
            setShowElite(false);
          }}
          style={{ margin: '0 10px', backgroundColor: showNormal ? '#8af2ea' : '#fff', color: showNormal ? 'black' : '#000' }}
        >
          Normal Plans
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setShowNormal(false);
            setShowElite(true);
          }}
          style={{ margin: '0 10px', backgroundColor: showElite ? '#8af2ea' : '#fff', color: showElite ? 'black' : '#000' }}
        >
          Elite Plans
        </Button>
      </div>

      {/* Display plans based on the active tab */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {displayPlans.map((plan, index) => (
          <div key={index} style={{ width: '25%', padding: '10px', boxSizing: 'border-box' }}>
            <BestPlanCardView
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
              tagline={plan.tagline}
              popularPlan={plan.popularPlan} // Pass the popularPlan prop
              style={{ background: gradients[index % gradients.length] }}
              onSelectPlan={handleSelectPlan}
            />
          </div>
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && (
        <div style={{ textAlign: 'center', marginTop: '20px', width: '100%' }}>
          <Button
            variant="contained"
            onClick={() => setShowAll(true)}
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              backgroundColor: '#8af2ea',
              backgroundImage: 'linear-gradient(to right, #8af2ea, #cdfadd)',
              color: 'black'
            }}
          >
            Show All
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlansViewComponent;
