import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

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
    <div className="mx-5 my-5">
    <Containers/>
    </div>
      </>
  );
};

export default DefaultLayoutHoc(MyPlanPage);
