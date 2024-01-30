import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
import { MDBRipple } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const [data, newData] = useState([]);
   const navigate = useNavigate()
    const routeChange = (idx, plan) => {
      console.log("Navigating to:", `/my_plan/${idx}`);
      navigate(`/my_plan/${idx}`, { state: { plan: plan } });
    };

    const handleReloadWithDelay = () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };
    
    const cancelBooking = (booking_id) => {
      const sessionId = document.cookie.match(/sessionid=([^;]*)/);
    
      axios
        .delete(`http://127.0.0.1:8000/deletebooking/${booking_id}`, {
          data: {
            sessionid: sessionId[1],
          },
        })
        .then((req) => {
          toast.success("Booking canceled successfully");
          handleReloadWithDelay();
         
        })
        .catch((err) => {
          toast.error(err.message);
        });
    };
    
  

  useEffect(() => {
    const sessionId = document.cookie.match(/sessionid=([^;]*)/);


  if (sessionId) {
    axios
      .post("http://127.0.0.1:8000/checkUser/", { sessionid: sessionId[1] })
      .then((res) => console.log(res.data))
      .catch((err) => {document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      });
      axios
      .post("http://127.0.0.1:8000/getbookingof/", {sessionid:sessionId[1]})
      .then((res) => {
        newData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  else{
    window.location.href = '/';
  }
  }, []);

  return (
    <>
      
      <style>
        {`
          .custom-row {
            margin-bottom: 30px; 
          }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-12 my-8">

{data.length===0?<div class="container-fluid  mt-100">
				 <div class="row">
				 
					<div class="col-md-12">
					
							<div class="card">
						<div class="card-header">
						<h5>Your Plans</h5>
						</div>
						<div class="card-body cart">
								<div class="col-sm-12 empty-cart-cls text-center">
									<center><img src="https://t3.ftcdn.net/jpg/02/25/70/56/240_F_225705686_v1Mvf2ybyCy52t2kMeVSPMwBPXAxxinj.jpg" alt="ticket pic" width="400" class="img-fluid mb-4 mr-3"/></center>
									<h3><strong>Explore places around</strong></h3>
									<h4>Add something to make me happy :)</h4>
									<a href="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">Explore places</a>
									
								
								</div>
						</div>
				</div>
						
					
					</div>
				 
				 </div>
				
				</div>:<></>}

      <Row xs={1} md={3} className="g-4 ">
        {data.map((plan, idx) => (
          <Col key={idx} className="custom-row">
            <Card>
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow"
              >
                <Card.Img
                  variant="top"
                  src={`http://127.0.0.1:8000${plan.image}`}
                  style={{ height: "220px", width: "430px" }}
                />
                <a href="/">
                  <div
                    className="mask"
                    style={{ backgroundColor: "transparent" }}
                  ></div>
                </a>
              </MDBRipple>
              <Card.Body>
                <Card.Title>{plan.title} </Card.Title>
                <Card.Text>
                  <div className="flex space-between">
                    <div className="flex gap-1">
                      <IoLocationOutline /> {plan.location}
                    </div>
                    <div className="mr-2 font-bold"> ₹{plan.rate} x {plan.member_count}</div>
                  </div>
                </Card.Text>
                <hr />
                {plan.about.length > 150
                  ? `${plan.about.substring(0, 150)}...`
                  : plan.about}
                  <div className="mt-2 flex justify-between ">
                <Button
                  onClick={() => {
                    routeChange(idx, plan);
                    // Fetch data for the selected plan
                  }}
                  variant="primary"
                >
                  know more
                </Button>

                <Button
                  onClick={ ()=> cancelBooking(plan.booking_id)}
                  variant="primary"
                >
                  Unregistered
                </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
    </>
  );
};

export default DefaultLayoutHoc(MyPlanPage);
