import React, { useState } from "react";
import { RiAdminFill } from "react-icons/ri";

import { Modal, ModalBody } from "reactstrap";
import axios from "axios";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleUser } from "react-icons/fa6";


const AdminNavbar = ({ onAddPlan }) => {
  const [modal, setmodal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const[role , setrole]=useState("");

  async function isAdmin() {
    const sessionId = document.cookie.match(/sessionid=([^;]*)/);
  
    if (sessionId) {
      try {
        const res = await axios.post("http://127.0.0.1:8000/checkUser/", {
          sessionid: sessionId[1],
        });
        setrole(res.data)
      

      } catch (err) {
        document.cookie =
          "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        return false;
      }
    }
  
    return false;
  }

  const [AddPlan, setAddPlan] = useState({
    title: "",
    location: "",
    start_date: "",
    about: "",
    rate: "",
  });

  const handleLogout = () => {
    // Clear the session-related cookie
    document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
    window.location.href = "/";
  };

  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAddPlan({ ...AddPlan, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const openModal1 = () => {
    setmodal(true);
  };

  const closemodal1 = () => {
    setmodal(false);
    handleReloadWithDelay();

    // Clear the form data or reset the form
    setAddPlan({
      title: "",
      location: "",
      start_date: "",
      about: "",
      rate: "",
    });
  };

  function AddPlanDetails(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("location", AddPlan.location);
    formData.append("title", AddPlan.title);
    formData.append("start_date", AddPlan.start_date);
    formData.append("about", AddPlan.about);
    formData.append("rate", AddPlan.rate);
    formData.append("image", selectedImage);
    axios
      .post("http://127.0.0.1:8000/settravelplan/", formData)
      .then((req) => {
        toast.success("Plan Added Successfully");
        closemodal1();
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        <Modal
          className="color-dark"
          size="md"
          isOpen={modal}
          toggle={() => setmodal(!modal)}
        >
          <ModalBody toggle={() => setmodal(!modal)}>
            <form>
              <h3> Add New Plan</h3>
              <div className="modal-body mx-3">
                <MDBInput
                  label="Destination"
                  id="typeText"
                  onChange={handleInput}
                  name="title"
                  type="text"
                  size="lg"
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
                />
                <br />
      
                <div className="flex space-between gap-3">
                  <MDBInput
                    label="Price"
                    id="typeNumber"
                    onChange={handleInput}
                    name="rate"
                    type="number"
                  />
                  <MDBInput
                    label="date"
                    id="typeNumber"
                    onChange={handleInput}
                    name="start_date"
                    type="date"
                  />
                </div>
                <br />
                <MDBInput
                  label=""
                  id="typeNumber"
                  onChange={handleFileChange}
                  name="image"
                  type="file"
                />
                <br />
                <MDBTextArea
                  label="about"
                  id="textAreaExample"
                  name="about"
                  onChange={handleInput}
                  rows={4}
                />
              </div>

              <div>
                <div className="modal-footer d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={AddPlanDetails}
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>

        <div className="container flex mx-2 px-1 items-center justify-between">
          <div className="flex items-center ">
            <div className="logoDiv flex items-center">
              <a
                href="/admin"
                className="logoFlex flex items-center text-white "
              >
                <RiAdminFill className="text-4xl mr-2 font-bold" />
                <h1 className="text-3xl font-bold text-white">
                  Admin DashBoard
                </h1>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-5 "></div>
          <div className="flex ">
            <div className="text-center"></div>

            {document.cookie.match("sessionid") ? (
              <div className="dropdown m-0">
                <button
                  className=" btn  btn-secondary m-0 p-0 dropdown-toggle"
                  style={{ height: "30px", borderRadius: "50%" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaCircleUser size={35} />
                </button>
                <span
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="/">
                    {localStorage.getItem("userEmail")}
                  </a>
                  <a class="dropdown-item" href="/">
                    Home
                  </a>

                  {role === "ADMIN" ? (
                    <a className="dropdown-item"  href="#" onClick={openModal1}>
                      Add new plan
                    </a>
                  ) : (
                    ""
                  )}

                  {console.log("is admin ", isAdmin())}
                  <a class="dropdown-item" href="/" onClick={handleLogout}>
                    logout
                  </a>
                </span>
              </div>
            ) : (
              <div className="flex gap-2 mx-2 px-1 ">
                <div className="text-center"></div>
              </div>
            )}

           
          </div>
        </div>
      </nav>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AdminNavbar;
