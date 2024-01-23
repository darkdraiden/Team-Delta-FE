import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button} from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";
import AdminLayoutHoc from "../layout/Admin.layout";
import axios from "axios";

import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const TravelPlansAdmin = () => {
  const [cardData, setcardData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState({
    title: "",
    location: "",
    start_date: "",
    about: "",
    rate:"",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEditingPlan({ ...editingPlan, [name]: value });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/travelplan/")
      .then((res) => {
        setcardData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleEditPlan = ( plan) => {
    
    setEditingPlan(plan);
    setShowEditModal(true);
    
  };

  

  const handleDeletePlan = (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the plan "${title}"?`
    );

    if (confirmDelete) {
      axios
        .delete(`http://127.0.0.1:8000/deletetravelplan/${id}`)
        .then((res) => {
          alert(`${title} deleted`);
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };


 const handleUpdatePlan = () => {
  axios
    .put("http://127.0.0.1:8000/updatetravelplan/", {
        travel_id:editingPlan.travel_id,
      location: editingPlan.location,
      title: editingPlan.title,
      start_date: editingPlan.start_date,
      about: editingPlan.about,
      rate: editingPlan.rate,
    })
    .then((res) => {
      alert(`Edited successfully`);
      setShowEditModal(false);
      window.location.reload();
    })
    .catch((err) => console.log(err.message));
};

        
  return (
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
                  src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/04223747/featured-compressed-1.jpg"
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
                <Card.Text>{plan.about}</Card.Text>
                <div className="flex space-between">
                  <Button
                    onClick={() => handleDeletePlan(plan.travel_id, plan.title)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button onClick={() => handleEditPlan(plan)}>
                    Edit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={showEditModal}  toggle={() => setShowEditModal(!showEditModal)}>
        <ModalHeader toggle={() => setShowEditModal(!showEditModal)}> edit</ModalHeader>
        <ModalBody >
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
                <Button variant="primary" onClick={handleUpdatePlan }>
                  Update Plan
                </Button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AdminLayoutHoc(TravelPlansAdmin);
