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
      margin: '4rem 6rem',
    },
    heading: {
      fontSize: '3rem',
    },
    firstDes: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '4.5rem',
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
      <div style={styles.destination}>
        <h1 style={styles.heading}>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <div style={styles.firstDes}>
          <div style={styles.desText}>
            <h2>Taal Volcano, Batangas</h2>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boasts a volcano
              inside a lake inside an Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet dolorum aliquid, corrupti iusto molestias officia hic ab sunt incidunt dolorem voluptates laborum repellendus adipisci iste praesentium ipsum nihil necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis animi nemo, voluptatem accusantium rerum quis reprehenderit aperiam debitis mollitia nesciunt optio quia nobis dolorum repellendus id excepturi, consequuntur ipsa consequatur.
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
        <div style={styles.firstDes}>
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
          
          <div style={styles.desText}>
            <h2>Taal Volcano, Batangas</h2>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boasts a volcano
              inside a lake inside an Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet dolorum aliquid, corrupti iusto molestias officia hic ab sunt incidunt dolorem voluptates laborum repellendus adipisci iste praesentium ipsum nihil necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis animi nemo, voluptatem accusantium rerum quis reprehenderit aperiam debitis mollitia nesciunt optio quia nobis dolorum repellendus id excepturi, consequuntur ipsa consequatur.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default DefaultLayoutHoc(MyPlanDetails);