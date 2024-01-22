import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { MDBRipple } from 'mdb-react-ui-kit';
import AdminPlan from './AdminPlan';
import AdminLayoutHoc from '../layout/Admin.layout';

const TravelPlansAdmin = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  const handleAddPlan = (newPlan) => {
    setTravelPlans([...travelPlans, { ...newPlan, id: travelPlans.length + 1 }]);
  };

  const handleDeletePlan = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  const handleEditPlan = (id, newDate) => {
    setTravelPlans((plans) =>
      plans.map((plan) => (plan.id === id ? { ...plan, date: newDate } : plan))
    );
  };

  useEffect(() => {
    // Simulate initial fetching of plans
    setTravelPlans([
      { id: 1, destination: 'Paris', date: '2022-05-15' },
      { id: 2, destination: 'Tokyo', date: '2022-06-20' },
    ]);
  }, []);


  return (
   
      <div className='mx-20'>
        <h2 className="text-center">Travel Plans</h2>

       

        <Row xs={1} md={3} className="g-4">
          {travelPlans.map((plan) => (
            <Col key={plan.id} className='custom-row'>
              <Card>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
                  <Card.Img
                    variant="top"
                    src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/04223747/featured-compressed-1.jpg"
                    style={{ height: '220px', width: '430px' }}
                  />
                  <a href='#!'>
                    <div className='mask' style={{ backgroundColor: 'transparent' }}></div>
                  </a>
                </MDBRipple>
                <Card.Body>
                  <Card.Title>{`${plan.destination} - ${plan.date}`}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <div className='flex space-between'>
                  <Button onClick={() => handleDeletePlan(plan.id)} variant="danger">
                    Delete
                  </Button>
                  <Button onClick={() => handleEditPlan(plan.id, prompt('Enter new date:'))}>
                    Edit Date
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

  );
};

export default AdminLayoutHoc(TravelPlansAdmin);
