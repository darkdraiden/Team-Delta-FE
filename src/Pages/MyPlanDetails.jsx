import React from 'react';
import { useParams } from 'react-router-dom';

function MyPlanDetails() {
  const { idx } = useParams();
  console.log('Current idx:', idx);


  // Fetch details based on idx and render the component

  return (
    <div>
      <h1>My Plan Details for Card {idx}</h1>
      {/* Render details based on idx */}
    </div>
  );
}

export default MyPlanDetails;
