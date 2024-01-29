import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MDBInput } from "mdb-react-ui-kit";
// import PaymentModel from "../PaymentModal/Payment.Component";
// import { MovieContext } from "../../context/Movie.context";

const PlanInfo = ({ planData }) => {
  const [price, setprice] = useState(planData.rate);
  const [modal2, setmodal2] = useState(false);
  const[AddDate , setAddDate] = useState(null);

  

  const handleInput = (e) => {
   
    setAddDate(e.target.value);
  }; 

  const buy_plan = () => {
    const sessionId = document.cookie.match(/sessionid=([^;]*)/);
    axios
      .post("http://127.0.0.1:8000/book/", {
        booking_price: price,
        travel: planData.travel_id,
        member_count: price / planData.rate,
        booking_date: AddDate,
        sessionid: sessionId[1],
      })
      .then((req) => {
        toast.success("Booked successfully");
        setmodal2(false)
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const minus = () => {
    if (price - planData.rate > 0) setprice(price - planData.rate);
  };
  const plus = () => {
    if (price + planData.rate < 500000) setprice(price + planData.rate);
  };
  return (
    <>
    
      <Modal size="md" isOpen={modal2} toggle={() => setmodal2(!modal2)}>
        <ModalHeader toggle={() => setmodal2(!modal2)}>Book Ticket</ModalHeader>
        <ModalBody>
         
          <center>
            Sure want to book this plan for{" "}
            <b>{price / planData.rate} members</b>?
          </center>
          <div className="flex mx-5 mt-4 ">
          <MDBInput
                   
                    label="booking_date"
                    id="typeNumber"
                    onChange={handleInput}
                    name="booking_date"
                    type="date"
                  />
       </div>
          <div className="my-5 d-flex justify-content-center">
            <button
              type="button"
              onClick={() => setmodal2(false)}
              className="text-white bg-red-700 hover:bg-red-800 mt-3 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Cancel
            </button>
            <div className="mx-5 m-2"></div>
            <button
            onClick={()=>buy_plan()}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 mt-3 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Pay
            </button>
          </div>
        </ModalBody>
      </Modal>
      
      
      {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">{planData.title}</h1>
        <div className="flex  flex-col gap-2 text-white">
          <h5>{planData.location}</h5>

          <h6>{planData.start_date}</h6>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="bg-red-500 d-flex rounded-lg text-white w-full">
            <button
              onClick={minus}
              className="bg-red-500 font-semibold m-1 p-3 w-full"
            >
              -
            </button>
            <button
              onClick={() => setmodal2(true)}
              className="bg-red-500 w-full font-semibold m-1 p-3 "
            >
              {price}
            </button>
            <button
              onClick={plus}
              className="bg-red-500 w-full font-semibold m-1 p-3 "
            >
              +
            </button>
          </div>
        </div>
      </div>
   </>
  );
};

export default PlanInfo;
