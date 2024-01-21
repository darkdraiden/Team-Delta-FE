import React, { useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
//import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";

import { Modal, ModalBody, ModalHeader } from "reactstrap";
import axios from "axios";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
         
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [user, setuser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  function signInDetails(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/signup/", {
        name: user.name,
        email: user.email,
        phonenumber: user.phonenumber,
        password: user.password,
      })
      .then((req) => console.log(req.data))
      .catch((err) => console.log(err.message));
  }

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
          <form>
            <div className="modal-body mx-3">
              <div className="md-form mb-2">
                <i className="fas fa-user prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                >
                  Your name
                </label>
                <input
                  type="text"
                  onChange={handleInput}
                  id="orangeForm-name"
                  className="form-control validate"
                  name="name"
                />
              </div>
              <div className="md-form mb-2">
                <i className="fas fa-envelope prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-email"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleInput}
                  id="orangeForm-email"
                  className="form-control validate"
                  name="email"
                />
              </div>

              <div className="md-form mb-2">
                <i className="fas fa-envelope prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-email"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  onChange={handleInput}
                  id="orangeForm-phone"
                  className="form-control validate"
                  name="phonenumber"
                />
              </div>

              <div className="md-form mb-2">
                <i className="fas fa-lock prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-pass"
                >
                  Your password
                </label>
                <input
                  type="password"
                  onChange={handleInput}
                  id="orangeForm-pass"
                  className="form-control validate"
                  name="password"
                />
              </div>

              <div className="md-form mb-2">
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-pass"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="orangeForm-cpass"
                  className="form-control validate"
                  name="confirm_password"
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
                  Sign Up
                </button>
              </div>
              already have an account
              <button
                type="button"
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
          <div className="modal-body mx-3">
            <div className="md-form mb-2">
              <i className="fas fa-envelope prefix grey-text"></i>
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="orangeForm-email"
              >
                Your email
              </label>
              <input
                type="email"
                id="orangeForm-email"
                className="form-control validate"
              />
            </div>

            <div className="md-form mb-2">
              <i className="fas fa-lock prefix grey-text"></i>
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="orangeForm-pass"
              >
                Your password
              </label>
              <input
                type="password"
                id="orangeForm-pass"
                className="form-control validate"
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
            <a href="#" className="logoFlex flex items-center ">
              <SiYourtraveldottv className="text-4xl mr-2 font-bold" />
              <h1 className="text-3xl font-bold">Travel</h1>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-5 ">
          <ul className="navList flex  space-x-5 space-between text-xl font-medium">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="my_plans" className="navLink">
                My Plans
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ">
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
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium/Tab Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
