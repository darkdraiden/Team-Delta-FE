import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Containers from "../components/Conatiners/Containers";
//import axios from "axios";

const HomePage = () => {

  /* const [cardData, setcardData] = useState([]);

 useEffect(() => {
    const requestcardData = async () => {
      const getcardData = await axios.get("");
      setcardData(getcardData.data.results);
    };

    requestcardData();
  }, []);
  */

  return (
    <>
      <HeroCarousel />
      <div className=" p-2 ">
        <h1 className="text-4xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 text-center mb-3">
          Explore Travel Plans
        </h1>
       
        <div className="container mx-auto px-4 md:px-12 my-8">
        <Containers/>
        </div>
      </div>

      

          <div className="hidden md:flex"></div>
        
      
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
