import { Outlet } from 'react-router';
import NavBar from './../Component/Header/NavBar';
import Footer from '../Component/Footer/Footer';

const Root = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar></NavBar>
     <div className='flex-1'> <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Root
