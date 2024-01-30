"use client";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { SiYourtraveldottv } from "react-icons/si";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircleUser } from "react-icons/fa6";

function NavSm() {
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const[role , setrole]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const passwordMatch = usr.password === usr.confirm_password;
  
    if (passwordMatch) {
      console.log('Passwords match');
  
    } else {
      console.log('Passwords do not match');
  
    }
  };

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

  const [user, setuser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const [usr, setusr] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleInputLogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setusr({ ...usr, [name]: value });
    if (name === 'email') {
      localStorage.setItem('userEmail', value);
    }
  };

  function signUpDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signup/", {
        name: user.name,
        email: user.email,
        phonenumber: user.phonenumber,
        password: user.password,
      })
      .then((req) => {
        toast.success("User Created Successfully!");
        openModal2();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  function signInDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signin/", {
        email: usr.email,
        password: usr.password,
      })
      .then((req) => {
        const cookies = new Cookies();
        cookies.set("sessionid", req.data.sessionid, { path: "/" });
        toast.success("Logged In Successfully!");
        setmodal2(false);
      })
      .catch((err) => toast.error(err.message));
  }

  const handleLogout = () => {
    // Clear the session-related cookie
    document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
    window.location.href = "/";
  };

  const openModal1 = () => {
    setmodal(true);
    setmodal2(false);
  };

  const openModal2 = () => {
    setmodal2(true);
    setmodal(false);
  };

  return (
    <>
      <Modal size="md" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>Sign Up</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="modal-body mx-3">
              <div className="md-form mb-1">
                <MDBInput
                  label="Your Name"
                  id="typeText"
                  name="name"
                  onChange={handleInput}
                  type="text"
                  size="lg"
                  required
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />

                <br />
                <MDBInput
                  label="Your email"
                  id="typeemail"
                  name="email"
                  onChange={handleInput}
                  type="email"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Phone Number"
                  id="typephone"
                  name="phonenumber"
                  onChange={handleInput}
                  type="tel"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Password"
                  id="typepass"
                  name="password"
                  onChange={handleInput}
                  type="password"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Confirm Password"
                  id="typecpassword"
                  name="confirm_password"
                  onChange={handleInput}
                  type="password"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              
            </div>

            <div>
              <div className="modal-footer d-flex justify-content-center">
                <button
              type="submit"

                  onClick={signUpDetails}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign Up
                </button>
              </div>
              already have an account
              <button
              type="submit"
                
                onClick={openModal2}
                className="text-black underline focus:outline-none   font-medium  text-sm px-6 py-2.5 text-center me-2 mb-2 "
              >
                sign In
              </button>
              
            </div>
          </form>
        </ModalBody>
      </Modal>

      <Modal size="md" isOpen={modal2} toggle={() => setmodal2(!modal2)}>
        <ModalHeader toggle={() => setmodal2(!modal2)}>Sign In</ModalHeader>
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
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-small rounded-full text-sm px-3 py-1.5 text-center me-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign In
              </button>
            </div>
            Don't have an account
            <button
              type="button"
              onClick={openModal1}
              className="text-black underline focus:outline-none mu-1  font-small  text-sm px-6 py-2.5 text-center me-2 mb-2 "
            >
              Sign Up
            </button>
          </div>
        </ModalBody>
      </Modal>

      <div className="container flex mx-1 px-1 items-center justify-between">
        <div className="flex items-center ">
          <div className="logoDiv flex items-center">
            <a href="/" className="logoFlex flex items-center text-white ">
              <SiYourtraveldottv className="text-3xl mr-1 font-bold" />
              <h1 className="text-2xl font-bold text-white">Travel</h1>
            </a>
          </div>
        </div>
       
        
         {document.cookie.match('sessionid')?<div className="dropdown m-0">
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
          <span className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/">
            {localStorage.getItem('userEmail')}
            </a>
            <a class="dropdown-item" href="/">
              Home
            </a>

            {role==="ADMIN" ? (
  <a className="dropdown-item" href="/admin">
    Admin
  </a>
) : (
  ""
)}


            {console.log("is admin ", isAdmin())}
            <a class="dropdown-item" href="/" onClick={handleLogout} >
              Logout
            </a>

            
          </span>
        </div>
        :<div className="flex gap-2 mx-2 px-1 ">
          <div className="text-center"></div>

          <button
            type="button"
            onClick={openModal2}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-small rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={openModal1}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-small rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign Up
          </button>
        </div>}
        
      </div>
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
}

function NavLg() {
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const[role , setrole]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const passwordMatch = usr.password === usr.confirm_password;
  
    if (passwordMatch) {
      console.log('Passwords match');
  
    } else {
      console.log('Passwords do not match');
  
    }
  };

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

  const [user, setuser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const [usr, setusr] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleInputLogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setusr({ ...usr, [name]: value });
    if (name === 'email') {
      localStorage.setItem('userEmail', value);
    }
  };

  function signUpDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signup/", {
        name: user.name,
        email: user.email,
        phonenumber: user.phonenumber,
        password: user.password,
      })
      .then((req) => {
        toast.success("User Created Successfully!");
        openModal2();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  function signInDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signin/", {
        email: usr.email,
        password: usr.password,
      })
      .then((req) => {
        const cookies = new Cookies();
        cookies.set("sessionid", req.data.sessionid, { path: "/" });
        toast.success("Logged In Successfully!");
        setmodal2(false);
      })
      .catch((err) => toast.error(err.message));
  }

  const handleLogout = () => {
    // Clear the session-related cookie
    document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
    window.location.href = "/";
  };

  const openModal1 = () => {
    setmodal(true);
    setmodal2(false);
  };

  const openModal2 = () => {
    setmodal2(true);
    setmodal(false);
  };

  return (
    <>
      <Modal size="md" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>Sign Up</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="modal-body mx-3">
              <div className="md-form mb-1">
                <MDBInput
                  label="Your Name"
                  id="typeText"
                  name="name"
                  onChange={handleInput}
                  type="text"
                  size="lg"
                  required
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />

                <br />
                <MDBInput
                  label="Your email"
                  id="typeemail"
                  name="email"
                  onChange={handleInput}
                  type="email"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Phone Number"
                  id="typephone"
                  name="phonenumber"
                  onChange={handleInput}
                  type="tel"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Password"
                  id="typepass"
                  name="password"
                  onChange={handleInput}
                  type="password"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
                <br />
                <MDBInput
                  label="Confirm Password"
                  id="typecpassword"
                  name="confirm_password"
                  onChange={handleInput}
                  type="password"
                  size="lg"
                  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              
            </div>

            <div>
              <div className="modal-footer d-flex justify-content-center">
                <button
              type="submit"

                  onClick={signUpDetails}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign Up
                </button>
              </div>
              already have an account
              <button
              type="submit"
                
                onClick={openModal2}
                className="text-black underline focus:outline-none   font-medium  text-sm px-6 py-2.5 text-center me-2 mb-2 "
              >
                sign In
              </button>
              
            </div>
          </form>
        </ModalBody>
      </Modal>

      <Modal size="md" isOpen={modal2} toggle={() => setmodal2(!modal2)}>
        <ModalHeader toggle={() => setmodal2(!modal2)}>Sign In</ModalHeader>
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
              onClick={openModal1}
              className="text-black underline focus:outline-none mu-1  font-medium  text-sm px-6 py-2.5 text-center me-2 mb-2 "
            >
              Sign Up
            </button>
          </div>
        </ModalBody>
      </Modal>

      <div className="container flex mx-2 px-1 items-center justify-between">
        <div className="flex items-center ">
          <div className="logoDiv flex items-center">
            <a href="/" className="logoFlex flex items-center text-white ">
              <SiYourtraveldottv className="text-4xl mr-2 font-bold" />
              <h1 className="text-3xl font-bold text-white">Travel</h1>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-5 ">
          <ul className="navList flex  space-x-5 space-between text-xl font-medium">
            <li className="navItem">
              <a href="/" className="navLink text-white">
                Home
              </a>
            </li>

            <li className="navItem">
              {document.cookie.match('sessionid')?
              <a href="/my_plans" className="navLink text-white">
                My Plans
              </a>
              :
              <a href="/my_plans" className="navLink text-white" style={{color:'#ff0000', pointerEvents:'none'}}>
                My Plans
              </a>
}
            </li>

            <li className="navItem">
              <a href="/about" className="navLink text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>
        
         {document.cookie.match('sessionid')?<div className="dropdown m-0">
          
          <button
            className=" btn  btn-secondary m-0 p-0 dropdown-toggle-center"
            style={{ height: "30px", borderRadius: "50%" }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FaCircleUser size={35} />
          </button>
          <span className="dropdown-menu border center" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item border mt-0" href="/">
            {localStorage.getItem('userEmail')}
            </a>
            <a class="dropdown-item border  text-md" href="/">
              Home
            </a>

            {role==="ADMIN" ? (
  <a className="dropdown-item border" href="/admin">
    Admin
  </a>
) : (
  ""
)}

            {console.log("is admin ", isAdmin())}
            <a class="dropdown-item border" href="/" onClick={handleLogout} >
              Logout
            </a>

            
          </span>
        </div>
        :<div className="flex gap-2 mx-2 px-1 ">
          <div className="text-center"></div>

          <button
            type="button"
            onClick={openModal2}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={openModal1}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign Up
          </button>
        </div>}
        
      </div>
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
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-3 py-2.5 w-100%">
      {/* Mobile Screen NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavLg />
      </div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
