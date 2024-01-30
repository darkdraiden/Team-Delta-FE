import React from "react";
import PlanInfo from "./PlanInfo";
// import { MovieContext } from "../../context/Movie.context";

const planHero = ({ planData }) => {
 
  return (
    <>
      {/* Large Screen Device */}
      <div
        className="relative lg:block md:block hidden w-full"
        style={{ height: "30rem" }}
      >
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34 , 0.9) 14.95%, rgba(34, 34, 34 , 0.9) 30.3%, rgba(34, 34, 34, 0.9) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)",
          }}
        />

        <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
          <div className="w-72 h-96">
            <img
              src={`http://127.0.0.1:8000${planData.image}`}
              alt="Movie Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <PlanInfo planData={planData} />
          </div>
        </div>
        <img
          src={`http://127.0.0.1:8000${planData.image}`}
          alt="backdrop poster"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className="relative block lg:hidden md:hidden"
        style={{ height: "39rem" }}
      >
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34 , 0.9) 14.95%, rgba(34, 34, 34 , 0.9) 30.3%, rgba(34, 34, 34, 0.9) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)",
          }}
        />

        <div className="absolute z-30 left-24 top-10 flex flex-col items-center gap-10">
          <div className="flex w-48 h-60 items-center">
            <img
              src={`http://127.0.0.1:8000${planData.image}`}
              alt="Movie Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <PlanInfo planData={planData} />
          </div>
        </div>
        <img
          src={`http://127.0.0.1:8000${planData.image}`}
          alt="backdrop poster"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default planHero;
