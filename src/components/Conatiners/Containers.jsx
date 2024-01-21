import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { MDBRipple } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

function Containers() {
    const navigate = useNavigate();
   
        const routeChange = (idx) => {
            console.log('Navigating to:', `/my_plan/${idx}`);
            navigate(`/my_plan/${idx}`);
          };
          
       

  return (
  <>
    <style>
    {`
      .custom-row {
        margin-bottom: 30px; 
      }
    `}
  </style>
  
    <Row xs={1} md={3} className="g-4 ">
      {Array.from({ length: 7 }).map((_, idx) => (
        <Col key={idx} className='custom-row'>
          <Card>
          <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
            <Card.Img variant="top" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/04223747/featured-compressed-1.jpg" style={{ height: '220px', width: '430px' }} />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'transparent' }}></div>
      </a>
    </MDBRipple>
            <Card.Body>
              <Card.Title>Card title </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button onClick={() => routeChange(idx)} variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </>
  );
}

export default Containers;
