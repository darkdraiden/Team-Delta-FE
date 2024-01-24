import React from 'react';
import { useParams , useLocation} from 'react-router-dom';
import PlanHero from '../components/Plan/planHero';
import DefaultLayoutHoc from '../layout/Default.layout';

function MyPlanDetails() {
  const { idx } = useParams();
  const { plan } = useLocation().state;
  console.log("plan is " , plan);
  console.log('Current idx:', idx);

  const styles = {
    destination: {
      margin: '3rem 6rem',
      textAlign : "center"
    },
    heading: {
      fontSize: '3rem',
    },
    firstDes: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '2.5rem',
    },
    desText: {
      width: '45%',
      textAlign: 'start',
      fontSize: '1.1rem',
    },
    image: {
      position: 'relative',
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
     
    },
    img: {
      width: '49%',
      height: '350px',
      objectFit: 'cover',
      borderRadius: '6px',
      boxShadow: '-1px 1px 62px -18px rgba(0, 0, 0, 0.19)',
    },
    secondImg: {
        position: 'absolute',
        top: '10%', // Adjust the top property as needed
        right: '0',
        width: '49%',
        height: '350px',
        objectFit: 'cover',
        borderRadius: '6px',
        boxShadow: '-1px 1px 62px -18px rgba(0, 0, 0, 0.19)',
      },
  };

  return (
    <div>
      <PlanHero planData={plan} />
      <div  style={styles.destination}>
        <h1 style={styles.heading}>About {plan.title}</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <hr/>
        <div style={styles.firstDes}>
        
          <div style={styles.desText}>
          
            <p className='text-justify'>
            {plan.about.length > 500
                    ? `${plan.about.substring(0, 900)}...`
                    : plan.about}
            </p>
          </div>
          <div style={styles.image}>
            <img
              alt="img"
              src="https://assets.cntraveller.in/photos/63ad209f79d81704e445de5d/master/w_1600%2Cc_limit/The%2520Burj%2520Khalifa-GettyImages-1084264582.jpeg"
              style={styles.img}
            />
            <img
              alt="img"
              src="https://us.images.westend61.de/0001589211pw/aerial-view-of-dubai-frame-an-iconic-building-in-dubai-downtown-with-city-skyline-in-background-during-a-beautiful-sunset-united-arab-emirates-AAEF11270.jpg"
              style={styles.secondImg}
            />
          </div>
        </div>

       <hr/>

      </div>
    </div>
  );
}

export default DefaultLayoutHoc(MyPlanDetails);