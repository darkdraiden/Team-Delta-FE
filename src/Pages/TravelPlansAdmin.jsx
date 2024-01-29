import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";
import AdminLayoutHoc from "../layout/Admin.layout";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Cookies from "universal-cookie";

const TravelPlansAdmin = () => {
  const [cardData, setcardData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [editingPlan, setEditingPlan] = useState({
    title: "",
    location: "",
    start_date: "",
    about: "",
    rate: "",
  });

  const [usr, setusr] = useState({
    email: "",
    password: "",
  });

  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleInputLogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setusr({ ...usr, [name]: value });
  };

  function signInDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signin/", {
        email: usr.email,
        password: usr.password,
      })
      .then((req) => {
        if(req.data['role']==="ADMIN"){
        const cookies = new Cookies();
        cookies.set("sessionid", req.data['sessionid'], { path: "/" });
        toast.success("Logged In Successfully!");
        setmodal2(false);}
        else{
          toast.error("Required admin priviledge")
        }
      })
      .catch((err) => toast.error(err.message));
  }


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEditingPlan({ ...editingPlan, [name]: value });
  };
  
  useEffect(() => {
    const sessionId = document.cookie.match(/sessionid=([^;]*)/);
    if(sessionId===null) setmodal2(true)

  if (sessionId) {
    axios
      .post("http://127.0.0.1:8000/checkUser/", { sessionid: sessionId[1] })
      .then((res) => {if(res.data!=="ADMIN"){
setmodal2(true)
      }})
      .catch((err) => {document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; setmodal2(true);
      });
    }
    axios
      .get("http://127.0.0.1:8000/travelplan/")
      .then((res) => {
        setcardData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleEditPlan = (plan) => {
    setEditingPlan(plan);
    setShowEditModal(true);
  };

  const handleDeletePlan = (id, title) => {
    axios
      .delete(`http://127.0.0.1:8000/deletetravelplan/${id}`)
      .then((res) => {
        toast.success(`Travel Plan ${title} deleted`);
        handleReloadWithDelay();
      })
      .catch((err) => console.log(err.message));
  };

  const handleUpdatePlan = () => {
    axios
      .put("http://127.0.0.1:8000/updatetravelplan/", {
        travel_id: editingPlan.travel_id,
        location: editingPlan.location,
        title: editingPlan.title,
        start_date: editingPlan.start_date,
        about: editingPlan.about,
        rate: editingPlan.rate,
      })
      .then((res) => {
        toast.success("Plan Edited Successfully!");
        setShowEditModal(false);
        handleReloadWithDelay();
      })
      .catch((err) => console.log(err.message));
  };
  return (
    
<div>

<Modal size="md" isOpen={modal2}>
        <ModalHeader >Sign In</ModalHeader>
        <ModalBody>
          {/* <button onClick={gotSuccess("")}  type="button" className="close" data-dismiss="alert" aria-label="Close" >
             <span aria-hidden="true">&times;</span>
         </button> */}

          <div className="modal-body mx-3">
            <div className="md-form mb-2">
              <MDBInput
                label="Enter email"
                name="email"
                onChange={handleInputLogin}
                type="email"
                size="lg"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
              />
              <br />
              <MDBInput
                label="Password"
                name="password"
                onChange={handleInputLogin}
                type="password"
                size="lg"
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
          </div>
          <div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                onClick={signInDetails}
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign In
              </button>
            </div>
            Don't have an account
            <button
              type="button"
              className="text-black underline focus:outline-none mu-1  font-medium  text-sm px-6 py-2.5 text-center me-2 mb-2 "
            >
              Sign Up
            </button>
          </div>
        </ModalBody>
      </Modal>

    <div className="mx-20">
      <h2 className="text-center">Travel Plans</h2>

      <Row xs={1} md={3} className="g-4">
        {cardData.map((plan) => (
          <Col key={plan.travel_id} className="custom-row">
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
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "transparent" }}
                  ></div>
                </a>
              </MDBRipple>
              <Card.Body>
                <Card.Title>{plan.title}</Card.Title>
                <Card.Text>
                  <div className="flex space-between">
                    <div className="flex gap-1">
                      <IoLocationOutline /> {plan.location}
                    </div>
                    <div className="mr-2 font-bold"> ₹{plan.rate}</div>
                  </div>
                  <hr></hr>

                  {plan.about.length > 150
                    ? `${plan.about.substring(0, 150)}...`
                    : plan.about}
                </Card.Text>
                <div className="flex space-between">
                  <Button
                    onClick={() => handleDeletePlan(plan.travel_id, plan.title)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  total registered : {plan.total_count}
                  <br></br>
                  <Button onClick={() => handleEditPlan(plan)}>Edit</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        isOpen={showEditModal}
        toggle={() => setShowEditModal(!showEditModal)}
      >
        <ModalHeader toggle={() => setShowEditModal(!showEditModal)}>
          {" "}
          edit
        </ModalHeader>
        <ModalBody>
          <form>
            <h3> Edit Plan</h3>
            <div className="modal-body mx-3">
              <MDBInput
                label="Destination"
                id="typeText"
                onChange={handleInput}
                name="title"
                type="text"
                size="lg"
                value={editingPlan.title}
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
              />
              <br />
              <MDBInput
                label="location"
                id="typeText"
                onChange={handleInput}
                name="location"
                type="text"
                size="lg"
                value={editingPlan.location}
              />
              <br />
              <MDBInput
                label="Places NearBy"
                id="typeText"
                onChange={handleInput}
                name="places_nearby"
                type="text"
                size="lg"
                value={editingPlan.places_nearby}
              />
              <br />
              <div className="flex space-between gap-3">
                <MDBInput
                  label="Price"
                  id="typeNumber"
                  onChange={handleInput}
                  name="rate"
                  type="number"
                  value={editingPlan.rate}
                />
                <MDBInput
                  label="date"
                  id="typeNumber"
                  onChange={handleInput}
                  name="start_date"
                  type="date"
                  value={editingPlan.start_date}
                />
              </div>
              <br />
              <MDBTextArea
                label="about"
                id="textAreaExample"
                name="about"
                onChange={handleInput}
                rows={4}
                value={editingPlan.about}
              />
            </div>

            <div>
              <div className="modal-footer d-flex justify-content-center">
                <Button variant="primary" onClick={handleUpdatePlan}>
                  Update Plan
                </Button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </div>
  );
};

export default AdminLayoutHoc(TravelPlansAdmin);
