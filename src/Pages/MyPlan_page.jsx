import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Containers from "../components/Conatiners/Containers";
//import axios from "axios";

const MyPlanPage = () => {

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
      </>
  );
};

export default DefaultLayoutHoc(MyPlanPage);
