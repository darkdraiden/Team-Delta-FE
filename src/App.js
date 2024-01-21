//import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home_page';
import MyPlanPage from './Pages/MyPlan_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPlanDetails from './Pages/MyPlanDetails';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/my_plans" element={< MyPlanPage/>} />
    <Route path="/my_plan/:idx" element={<MyPlanDetails />} />
    
  </Routes>
  );
}

export default App;
