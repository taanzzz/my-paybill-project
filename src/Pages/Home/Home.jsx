import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import BillSection from '../../Component/BillSection/BillSection';
import BillCarousel from './../../Component/Banner/BillCarousel';
import TrustedPartners from './../../Component/TrustedPartners/TrustedPartners';
import BillServiceCards from './../../Component/BillServiceCards/BillServiceCards';
import Counting from './../../Component/Counting/Counting';
import AboutService from './../../Component/AboutService/AboutService';


const Home = () => {
  const { user } = useContext(AuthContext);  // Access the user context to check if the user is logged in

  return (
    <div>
      {user && <BillSection />}  {/* Conditionally render BillSection if the user is logged in */}
      <BillCarousel />
      <TrustedPartners />
      <BillServiceCards />
      <Counting />
      <AboutService />
    </div>
  );
};

export default Home;
