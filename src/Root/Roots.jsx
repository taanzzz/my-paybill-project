
import { Outlet } from 'react-router';
import NavBar from './../Component/Header/NavBar';
import Footer from '../Component/Footer/Footer';
const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default Root
