import React from "react";
// import PaymentModel from "../PaymentModal/Payment.Component";
// import { MovieContext } from "../../context/Movie.context";

const PlanInfo = ({planData}) => {
  /* const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");*/
  console.log("p" , planData)
  return (
    <>
     {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {planData.title}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h5>{planData.location}</h5>
          
          <h4>
            {planData.start_date}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            // onClick={buy plan}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
           ₹ {planData.rate}
          </button>
          
        </div>
      </div>
    </>
  );
  };

export default PlanInfo;