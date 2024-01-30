import React, { useEffect } from "react";
import { useLocation} from "react-router-dom";
import PlanHero from "../components/Plan/planHero";
import DefaultLayoutHoc from "../layout/Default.layout";


function MyPlanDetails() {
  const { plan } = useLocation().state;
  

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Scroll to top when navigating back (on POP)
    const unlisten = () => {
      if (window.history.state) {
        window.scrollTo(0, 0);
      }
    };

    // Attach scroll restoration function to the popstate event
    window.addEventListener("popstate", unlisten);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("popstate", unlisten);
    };
  }, []);



  const styles = {
    destination: {
      margin: "3rem 6rem",
      textAlign: "center",
    },
    destination1: {
      margin: "3rem 3rem",
      textAlign: "center",
    },
    heading: {
      fontSize: "3rem",
    },
    firstDes: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "2.5rem",
    },
    firstDes1: {
      display: "flex ",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "2.5rem",
    },
    desText: {
      width: "45%",
      textAlign: "start",
      fontSize: "1.1rem",
    },
    desText1: {
      width: "85%",
      textAlign: "start",
      fontSize: "1.1rem",
    },
    image: {
      position: "relative",
      width: "50%",
      display: "flex",
      justifyContent: "space-between",
    },
    image1: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    img: {
      width: "49%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "6px",
      boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
    },
    secondImg: {
      position: "absolute",
      top: "10%", // Adjust the top property as needed
      right: "0",
      width: "49%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "6px",
      boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
    },
  };

  return (
    <div>
      <PlanHero planData={plan} />
      <div className="relative lg:block md:block hidden w-full">
      <div style={styles.destination}>
        <h1 style={styles.heading}>About {plan.title}</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <hr />
       
        <div style={styles.firstDes}>
          <div style={styles.desText}>
            <p className="text-justify">
              {plan.about.length > 500
                ? `${plan.about.substring(0, 900)}...`
                : plan.about}
            </p>
          </div>
          <div style={styles.image}>
            <img
              alt="img"
              src={`http://127.0.0.1:8000${plan.image}`}
              style={styles.img}
            />
            <img
              alt="img"
              src={`https://source.unsplash.com/random?${plan.title}`}
              style={styles.secondImg}
            />
          </div>
        </div>
        </div>
        </div>

        <div className="relative block lg:hidden md:hidden">
        <div style={styles.destination1}>
        <h1 style={styles.heading}>About {plan.title}</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <hr />
        <div style={styles.firstDes1}>
          <div style={styles.desText1}>
            <p className="text-justify">
              {plan.about.length > 500
                ? `${plan.about.substring(0, 500)}...`
                : plan.about}
            </p>
          </div>
          <div style={styles.image1}>
            <img
              alt="img"
              src={`http://127.0.0.1:8000${plan.image}`}
              style={styles.img}
            />
            <img
              alt="img"
              src={`https://source.unsplash.com/random?${plan.title}`}
              style={styles.secondImg}
            />
          </div>
        </div>

        </div>

        <hr />
      </div>
    </div>
   
  );
}

export default DefaultLayoutHoc(MyPlanDetails);
