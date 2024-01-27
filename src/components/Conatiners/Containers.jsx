import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
import { MDBRipple } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

function Containers() {
  const navigate = useNavigate();
  const [data, newData] = useState([]);

  const routeChange = (idx, plan) => {
    console.log("Navigating to:", `/my_plan/${idx}`);
    navigate(`/my_plan/${idx}`, { state: { plan: plan } });
  };

  useEffect(() => {
    const sessionId = document.cookie.match(/sessionid=([^;]*)/);

  if (sessionId) {
    axios
      .post("http://127.0.0.1:8000/checkUser/", { sessionid: sessionId[1] })
      .then((res) => console.log(res.data))
      .catch((err) => {document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      });
  }
    axios
      .get("http://127.0.0.1:8000/travelplan/", {withCredentials: true,})
      .then((res) => {
        newData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
                    <div className="mr-2 font-bold"> ₹{plan.rate}</div>
                  </div>
                </Card.Text>
                <hr />
                {plan.about.length > 150
                  ? `${plan.about.substring(0, 150)}...`
                  : plan.about}
                <Button
                  onClick={() => {
                    routeChange(idx, plan);
                    // Fetch data for the selected plan
                  }}
                  variant="primary"
                >
                  Explore more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Containers;
